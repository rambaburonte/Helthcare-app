import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function PrivacyScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for symmetry */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Your Privacy Matters</Text>
        <Text style={styles.text}>
          We prioritize your privacy. All your health data is securely stored and shared only with authorized professionals.
        </Text>

        <Text style={styles.sectionTitle}>Security Features</Text>
        <Text style={styles.text}>✔ End-to-end encrypted communication{'\n'}✔ Secure login with hashed passwords{'\n'}✔ No third-party data sharing</Text>

        <Text style={styles.sectionTitle}>Manage Your Data</Text>
        <Text style={styles.text}>
          You can request to download or delete your account data anytime. Contact support for data-related queries.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
});
