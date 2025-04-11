import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Search } from 'lucide-react-native';
import { categories, featuredDoctors } from '@/data/mockData';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Hello, John! 👋</Text>
            <Text style={styles.subtitle}>Find your suitable doctor</Text>
          </View>

          <TouchableOpacity style={styles.searchBar}>
            <Search size={20} color="#666" />
            <Text style={styles.searchText}>Search doctors, specialties...</Text>
          </TouchableOpacity>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={styles.categoryCard}
                  onPress={() => router.push(`/doctors/${category.id}`)}>
                  <View style={styles.iconContainer}>
                    <Image source={{ uri: category.icon }} style={styles.categoryIcon} />
                  </View>
                  <Text style={styles.categoryName}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Doctors</Text>
            {featuredDoctors.map((doctor) => (
              <TouchableOpacity
                key={doctor.id}
                style={styles.doctorCard}
                onPress={() => router.push(`/doctor/${doctor.id}`)}>
                <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>Dr. {doctor.name}</Text>
                  <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐ {doctor.rating}</Text>
                    <Text style={styles.reviews}>({doctor.reviews} reviews)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: 40, // Increased padding for extra safe area
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 20, // Adjusted to avoid extra padding with SafeAreaView
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoriesScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f7ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
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
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#333',
  },
  reviews: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});