import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Calendar, Clock, MapPin, Star } from 'lucide-react-native';
import { featuredDoctors } from '@/data/mockData';

export default function DoctorProfileScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const doctor = featuredDoctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text>Doctor not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
          <Text style={styles.name}>Dr. {doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Text style={styles.rating}>{doctor.rating}</Text>
            <Text style={styles.reviews}>({doctor.reviews} reviews)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{doctor.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {doctor.education.map((edu, index) => (
            <Text key={index} style={styles.educationItem}>• {edu}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.locationContainer}>
            <MapPin size={20} color="#666" />
            <Text style={styles.locationText}>{doctor.location}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <View style={styles.availabilityContainer}>
            <Calendar size={20} color="#666" />
            <Text style={styles.availabilityText}>
              Available on: {doctor.availability.join(', ')}
            </Text>
          </View>
          <View style={styles.availabilityContainer}>
            <Clock size={20} color="#666" />
            <Text style={styles.availabilityText}>9:00 AM - 5:00 PM</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Consultation Fee</Text>
          <Text style={styles.feeText}>₹8521{doctor.consultationFee}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.messageButton}
            onPress={() => router.push(`/chat/${doctor.id}`)}>
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => router.push(`/booking/${doctor.id}`)}>
            <Text style={styles.bookButtonText}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  doctorImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  educationItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  availabilityText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  feeText: {
    fontSize: 24,
    color: '#0066ff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  messageButton: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0066ff',
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#0066ff',
    fontSize: 16,
    fontWeight: '600',
  },
  bookButton: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#0066ff',
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});