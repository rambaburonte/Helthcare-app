// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRouter } from 'expo-router';
// import {
//   ChevronRight, Bell, Shield, HelpCircle, LogOut,
//   ArrowLeft, Settings, CalendarCheck, Wallet,
// } from 'lucide-react-native';

// const menuItems = [
//   { icon: Bell, label: 'Notifications', route: '/notifications' },
//   { icon: CalendarCheck, label: 'My Appointments', route: '/appointments' },
//   { icon: Wallet, label: 'My Wallet', route: '/After Profile/wallet' },
//   { icon: Shield, label: 'Privacy & Security', route: '/After Profile/privacy' },
//   { icon: HelpCircle, label: 'Help & Support', route: '/After Profile/support' },
// ];

// export default function ProfileScreen() {
//   const router = useRouter();
//   const [user, setUser] = useState({
//     username: '',
//     email: '',
//     mobileNumber: '',
//   });

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const storedUserId = await AsyncStorage.getItem('userId');
//         const token = await AsyncStorage.getItem('authToken');
//         const storedUsername = await AsyncStorage.getItem('username');
//         const storedEmail = await AsyncStorage.getItem('userEmail');

//         setUser((prev) => ({
//           ...prev,
//           username: storedUsername || 'User',
//           email: storedEmail || 'email@example.com',
//         }));

//         if (storedUserId && token) {
//           const response = await fetch(`http://192.168.1.2:8080/${storedUserId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setUser(data);
//           } else {
//             console.warn('Failed to fetch user profile from backend.');
//           }
//         }
//       } catch (error) {
//         console.error('Failed to load user data:', error);
//         Alert.alert('Error', 'Could not load user data.');
//       }
//     };

//     loadUserData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.clear();
//       router.replace('/');
//     } catch (error) {
//       console.error('Error during logout:', error);
//       Alert.alert('Error', 'Logout failed. Please try again.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerRow}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <ArrowLeft size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Profile</Text>
//         <TouchableOpacity onPress={() => router.push('/After Profile/settings')}>
//           <Settings size={22} color="#666" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Info */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{
//             uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>{user.username}</Text>
//         <Text style={styles.email}>{user.email}</Text>
//         {user.mobileNumber ? (
//           <Text style={styles.mobile}>📞 {user.mobileNumber}</Text>
//         ) : null}
//         <TouchableOpacity
//           style={styles.editButton}
//           onPress={() => router.push('/After Profile/editprofile')}
//         >
//           <Text style={styles.editButtonText}>Edit Profile</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Menu */}
//       <View style={styles.menuSection}>
//         {menuItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.menuItem}
//             onPress={() => router.push(item.route)}
//           >
//             <View style={styles.menuItemLeft}>
//               {React.createElement(item.icon, { size: 24, color: '#666' })}
//               <Text style={styles.menuItemText}>{item.label}</Text>
//             </View>
//             <ChevronRight size={20} color="#999" />
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Logout */}
//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <LogOut size={24} color="#ff4444" />
//         <Text style={styles.logoutText}>Log Out</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 30,
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//   },
//   title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
//   profileSection: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   email: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 5,
//   },
//   mobile: {
//     fontSize: 15,
//     color: '#444',
//     marginBottom: 10,
//   },
//   editButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: '#e6e6e6',
//     borderRadius: 20,
//   },
//   editButtonText: {
//     color: '#333',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   menuSection: {
//     padding: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuItemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   menuItemText: {
//     marginLeft: 15,
//     fontSize: 16,
//     color: '#333',
//   },
//   logoutButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 15,
//     marginTop: 20,
//     marginHorizontal: 20,
//     marginBottom: 40,
//   },
//   logoutText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#ff4444',
//     fontWeight: '500',
//   },
// });





import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
  ChevronRight, Bell, Shield, HelpCircle, LogOut,
  ArrowLeft, Settings, CalendarCheck, Wallet,
} from 'lucide-react-native';
import { useUser} from '../../UserContext';

const menuItems = [
  { icon: Bell, label: 'Notifications', route: '/notifications' },
  { icon: CalendarCheck, label: 'My Appointments', route: '/appointments' },
  { icon: Wallet, label: 'My Wallet', route: '/After Profile/wallet' },
  { icon: Shield, label: 'Privacy & Security', route: '/After Profile/privacy' },
  { icon: HelpCircle, label: 'Help & Support', route: '/After Profile/support' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState({
    username: '',
    email: '',
    mobileNumber: '',
  });

  const { user , setUser } = useUser();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('authToken');
        const storedUsername = await AsyncStorage.getItem('username');
        const storedEmail = await AsyncStorage.getItem('userEmail');

        setLoggedInUser((prev) => ({
          ...prev,
          username: storedUsername || 'User',
          email: storedEmail || 'email@example.com',
        }));

        if (storedUserId && token) {
          const response = await fetch(`http://192.168.1.2:8080/${storedUserId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setLoggedInUser(data);
          } else {
            console.warn('Failed to fetch user profile from backend.');
          }
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
        Alert.alert('Error', 'Could not load user data.');
      }
    };

    loadUserData();
  }, []);

  // const handleLogout =() => {
  //   setUser(null);
    
  // };

  // useEffect(() => {
  //   router.replace('/');
  // },[user]);

  const handleLogout = () => {
    setUser(null); // Clear the user state
  };
  
  useEffect(() => {
    if (user === null) {
      router.replace('/');
    }
  }, [user]);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity onPress={() => router.push('/After Profile/settings')}>
          <Settings size={22} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user?.username}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        {loggedInUser.mobileNumber ? (
          <Text style={styles.mobile}>📞 {loggedInUser.mobileNumber}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => router.push('/After Profile/editprofile')}
        >
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.push(item.route)}
          >
            <View style={styles.menuItemLeft}>
              {React.createElement(item.icon, { size: 24, color: '#666' })}
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <ChevronRight size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#ff4444" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  mobile: {
    fontSize: 15,
    color: '#444',
    marginBottom: 10,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  menuSection: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ff4444',
    fontWeight: '500',
  },
});
