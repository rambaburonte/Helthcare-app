import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { appointments } from '@/data/mockData';

export default function AppointmentsScreen() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredAppointments = appointments.filter(
    (apt) => (activeTab === 'upcoming' && new Date(apt.date) >= new Date()) ||
    (activeTab === 'past' && new Date(apt.date) < new Date())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}>
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}>
          <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.appointmentsList}>
        {filteredAppointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.appointmentHeader}>
              <Text style={styles.date}>{new Date(appointment.date).toLocaleDateString()}</Text>
              <Text style={[styles.status, styles[appointment.status]]}>
                {appointment.status}
              </Text>
            </View>
            <Text style={styles.doctorName}>Dr. {appointment.doctorName}</Text>
            <Text style={styles.specialty}>{appointment.specialty}</Text>
            <Text style={styles.time}>{appointment.time}</Text>
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
  tabs: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0066ff',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#0066ff',
    fontWeight: '600',
  },
  appointmentsList: {
    padding: 20,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12,
    overflow: 'hidden',
  },
  confirmed: {
    backgroundColor: '#e6f7ed',
    color: '#2d8653',
  },
  completed: {
    backgroundColor: '#e6e6e6',
    color: '#666',
  },
  cancelled: {
    backgroundColor: '#ffe6e6',
    color: '#cc0000',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});