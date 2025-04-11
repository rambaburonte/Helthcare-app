import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import React from 'react';
import { ChevronRight, Bell, CreditCard, Shield, HelpCircle, LogOut } from 'lucide-react-native';

const menuItems = [
  { icon: Bell, label: 'Notifications', route: '/notifications' },
  { icon: CreditCard, label: 'Payment Methods', route: '/payments' },
  { icon: Shield, label: 'Privacy & Security', route: '/privacy' },
  { icon: HelpCircle, label: 'Help & Support', route: '/support' },
];

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear token/session here if needed
    router.replace('/'); // Redirect to login page
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              {React.createElement(item.icon, { size: 24, color: '#666' })}
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <ChevronRight size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#ff4444" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
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
    marginBottom: 15,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
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
