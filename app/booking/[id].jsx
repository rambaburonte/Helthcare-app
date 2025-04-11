import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react-native';
import { featuredDoctors } from '@/data/mockData';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

const days = [
  { date: '25', day: 'Mon' },
  { date: '26', day: 'Tue' },
  { date: '27', day: 'Wed' },
  { date: '28', day: 'Thu' },
  { date: '29', day: 'Fri' },
];

export default function BookingScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const doctor = featuredDoctors.find((d) => d.id === id);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    // In a real app, this would make an API call to book the appointment
    router.push('/appointments');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Book Appointment</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. {doctor?.name}</Text>
          <Text style={styles.specialty}>{doctor?.specialty}</Text>
          <Text style={styles.fee}>${doctor?.consultationFee} per visit</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Calendar size={20} color="#666" />
            <Text style={styles.sectionTitle}>Select Date</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.datesContainer}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.date}
                style={[
                  styles.dateCard,
                  selectedDate === day.date && styles.selectedDate,
                ]}
                onPress={() => setSelectedDate(day.date)}>
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === day.date && styles.selectedDateText,
                  ]}>
                  {day.date}
                </Text>
                <Text
                  style={[
                    styles.dayText,
                    selectedDate === day.date && styles.selectedDateText,
                  ]}>
                  {day.day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color="#666" />
            <Text style={styles.sectionTitle}>Select Time</Text>
          </View>
          <View style={styles.timeGrid}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTime,
                ]}
                onPress={() => setSelectedTime(time)}>
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedTimeText,
                  ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.bookButton,
            (!selectedDate || !selectedTime) && styles.disabledButton,
          ]}
          onPress={handleBooking}
          disabled={!selectedDate || !selectedTime}>
          <Text style={styles.bookButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorInfo: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  fee: {
    fontSize: 18,
    color: '#0066ff',
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  datesContainer: {
    flexDirection: 'row',
  },
  dateCard: {
    width: 70,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedDate: {
    backgroundColor: '#0066ff',
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  selectedDateText: {
    color: '#fff',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeSlot: {
    width: '31%',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedTime: {
    backgroundColor: '#0066ff',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeText: {
    color: '#fff',
  },
  bookButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#0066ff',
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});