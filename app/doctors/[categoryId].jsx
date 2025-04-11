import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Star } from 'lucide-react-native';
import { categories, featuredDoctors } from '@/data/mockData';

export default function DoctorListScreen() {
  const { categoryId } = useLocalSearchParams();
  const router = useRouter();
  const category = categories.find((c) => c.id === categoryId);

  const doctors = featuredDoctors.filter((doctor) =>
    doctor.specialty.toLowerCase() === category?.name.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{category?.name}s</Text>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.doctorCard}
            onPress={() => router.push(`/doctor/${item.id}`)}>
            <Image source={{ uri: item.image }} style={styles.doctorImage} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>Dr. {item.name}</Text>
              <Text style={styles.specialty}>{item.specialty}</Text>
              <Text style={styles.experience}>{item.experience} experience</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FFD700" fill="#FFD700" />
                <Text style={styles.rating}>{item.rating}</Text>
                <Text style={styles.reviews}>({item.reviews} reviews)</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No doctors found in this category</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
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
  listContent: {
    padding: 20,
  },
  doctorCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
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
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  doctorInfo: {
    marginLeft: 15,
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  experience: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});