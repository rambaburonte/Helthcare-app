import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

const mockNotifications = [
  {
    id: '1',
    title: 'Appointment Confirmed',
    message: 'Your appointment with Dr. Sarah Wilson is confirmed for Mar 5, 3:00 PM.',
    time: '2 hours ago',
  },
  {
    id: '2',
    title: 'New Message',
    message: 'Dr. Michael Chen has sent you a message.',
    time: 'Yesterday',
  },
  {
    id: '3',
    title: 'Reminder',
    message: 'Don’t forget your appointment with Dr. Emily Rodriguez tomorrow at 11:15 AM.',
    time: '2 days ago',
  },
];

export default function Notifications() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <View style={{ width: 24 }} /> {/* placeholder for spacing */}
      </View>

      {/* Notifications List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {mockNotifications.map((notification) => (
          <View key={notification.id} style={styles.card}>
            <Text style={styles.cardTitle}>{notification.title}</Text>
            <Text style={styles.cardMessage}>{notification.message}</Text>
            <Text style={styles.cardTime}>{notification.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  cardMessage: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
  },
});
