import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
  Alert, ScrollView, ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useUser } from '../../UserContext'; // adjust the path if needed

export default function EditProfile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching from:", `http://192.168.1.16:8080/${user.id}`);
        const response = await axios.get(`http://192.168.1.16:8080/${user.id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        Alert.alert('Network Error', 'Make sure your backend is running and accessible.');
      } finally {
        setLoading(false);
      }
    };
  
    if (user?.id) fetchUserData();
  },[]);

  

  const handleSave = async () => {
    try {
      await axios.put(`http://192.168.1.16:8080/${user.id}`, user);
      Alert.alert('Success', 'Profile updated successfully!');
      router.back();
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user?.username || ''}
        onChangeText={(text) => setUser({ ...user, username: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user?.email || ''}
        onChangeText={(text) => setUser({ ...user, email: text })}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={user?.mobileNumber || ''}
        onChangeText={(text) => setUser({ ...user, mobileNumber: text })}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={user?.password || ''}
        onChangeText={(text) => setUser({ ...user, password: text })}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 40,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
