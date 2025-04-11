import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const specialties = [
  { id: 1, title: 'Cardiology', image: 'https://cdn.pixabay.com/photo/2025/03/03/18/33/jigsaw-9444656_1280.jpg' },
  { id: 2, title: 'Neurology', image: 'https://cdn.pixabay.com/photo/2023/12/15/21/03/ai-generated-8451407_1280.png' },
  { id: 3, title: 'Orthopedics', image: 'https://cdn.pixabay.com/photo/2017/12/29/08/49/x-ray-3047044_1280.jpg' },
  { id: 4, title: 'Dermatology', image: 'https://cdn.pixabay.com/photo/2021/12/07/11/31/dermatologist-6853066_1280.png' },
];

export default function LoginScreen() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-scroll specialties horizontally
  useEffect(() => {
    let scrollValue = 0;
    const interval = setInterval(() => {
      scrollValue += 140;
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: scrollValue, animated: true });
      }
      if (scrollValue > specialties.length * 140) scrollValue = 0;
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Info', 'Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.24:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const text = await response.text();
      setLoading(false);

      if (response.ok) {
        Alert.alert('Login Success', text);
        router.replace('/(tabs)/home');
      } else {
        Alert.alert('Login Failed', text);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Error', 'Failed to connect to server');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.brand}>🏥 Random Hospital</Text>

      <Text style={styles.expertTitle}>We are Experts In</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageScroll}>
        {specialties.map((item) => (
          <View key={item.id} style={styles.specialtyCard}>
            <Image source={{ uri: item.image }} style={styles.specialtyImage} />
            <Text style={styles.specialtyText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

     
      <Text style={styles.subtitle}>Login to your account</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Log In</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.signupLink}>
          Don’t have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6fc',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  brand: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077cc',
    textAlign: 'center',
    marginBottom: 20,
  },
  expertTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    marginLeft: 5,
  },
  imageScroll: {
    marginBottom: 25,
  },
  specialtyCard: {
    marginRight: 15,
    alignItems: 'center',
  },
  specialtyImage: {
    width: 130,
    height: 90,
    borderRadius: 10,
    marginBottom: 5,
  },
  specialtyText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#0077cc',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  signupLink: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    marginTop: 20,
  },
  link: {
    color: '#0077cc',
    fontWeight: '500',
  },
});
