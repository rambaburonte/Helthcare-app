import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react-native';
import { featuredDoctors } from '@/data/mockData';

const initialMessages = [
  {
    id: '1',
    text: 'Hello! How can I help you today?',
    sender: 'doctor',
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    text: 'I have been experiencing chest pain lately.',
    sender: 'user',
    timestamp: '10:01 AM',
  },
  {
    id: '3',
    text: 'I understand your concern. Can you describe the pain and when it occurs?',
    sender: 'doctor',
    timestamp: '10:02 AM',
  },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const doctor = featuredDoctors.find((d) => d.id === id);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          text: newMessage,
          sender: 'user',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Image source={{ uri: doctor?.image }} style={styles.doctorImage} />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. {doctor?.name}</Text>
          <Text style={styles.specialty}>{doctor?.specialty}</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' ? styles.userMessage : styles.doctorMessage,
            ]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Send size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    marginRight: 15,
  },
  doctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  messagesList: {
    padding: 20,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: '#0066ff',
    alignSelf: 'flex-end',
  },
  doctorMessage: {
    backgroundColor: '#f5f5f5',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#0066ff',
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
});