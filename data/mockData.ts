export const categories = [
  {
    id: '1',
    name: 'Cardiologist',
    icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344325.png',
  },
  {
    id: '2',
    name: 'Dermatologist',
    icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344334.png',
  },
  {
    id: '3',
    name: 'Pediatrician',
    icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344327.png',
  },
  {
    id: '4',
    name: 'Neurologist',
    icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344332.png',
  },
  {
    id: '5',
    name: 'Psychiatrist',
    icon: 'https://cdn-icons-png.flaticon.com/128/3344/3344333.png',
  },
];

export const featuredDoctors = [
  {
    id: '1',
    name: 'Sarah Wilson',
    specialty: 'Cardiologist',
    experience: '15 years',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    availability: ['Mon', 'Wed', 'Fri'],
    about: 'Dr. Sarah Wilson is a board-certified cardiologist with extensive experience in treating complex cardiac conditions. She specializes in preventive cardiology and heart failure management.',
    education: [
      'MD from Johns Hopkins University',
      'Cardiology Fellowship at Mayo Clinic',
    ],
    location: 'Medical Center, New York',
    consultationFee: 400,
  },
  {
    id: '2',
    name: 'Michael Chen',
    specialty: 'Dermatologist',
    experience: '12 years',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
    availability: ['Tue', 'Thu', 'Sat'],
    about: 'Dr. Michael Chen is a renowned dermatologist specializing in cosmetic dermatology and skin cancer treatment. He is known for his innovative approaches to skincare.',
    education: [
      'MD from Stanford University',
      'Dermatology Residency at UCSF',
    ],
    location: 'Skin Care Clinic, Los Angeles',
    consultationFee: 500,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: '10 years',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
    availability: ['Mon', 'Tue', 'Thu', 'Fri'],
    about: 'Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from newborns to adolescents.',
    education: [
      'MD from Columbia University',
      'Pediatric Residency at Children\'s Hospital of Philadelphia',
    ],
    location: 'Children\'s Medical Center, Chicago',
    consultationFee: 450,
  },
];

export const appointments = [
  {
    id: '1',
    doctorName: 'Sarah Wilson',
    specialty: 'Cardiologist',
    date: '2024-02-25',
    time: '10:00 AM',
    status: 'confirmed',
  },
  {
    id: '2',
    doctorName: 'Michael Chen',
    specialty: 'Dermatologist',
    date: '2024-01-15',
    time: '2:30 PM',
    status: 'completed',
  },
  {
    id: '3',
    doctorName: 'Emily Rodriguez',
    specialty: 'Pediatrician',
    date: '2024-01-10',
    time: '11:15 AM',
    status: 'cancelled',
  },
  {
    id: '4',
    doctorName: 'Sarah Wilson',
    specialty: 'Cardiologist',
    date: '2024-03-05',
    time: '3:00 PM',
    status: 'confirmed',
  },
];

export const chats = [
  {
    id: '1',
    doctorName: 'Sarah Wilson',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    lastMessage: 'Thank you for the consultation. Please take the prescribed medications regularly.',
    lastMessageTime: '10:30 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    doctorName: 'Michael Chen',
    doctorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
    lastMessage: 'Your skin condition is improving. Continue with the treatment.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '3',
    doctorName: 'Emily Rodriguez',
    doctorImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
    lastMessage: 'The fever should subside within 24 hours. Keep monitoring.',
    lastMessageTime: '2 days ago',
    unreadCount: 1,
  },
];