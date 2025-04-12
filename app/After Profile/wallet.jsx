import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

const mockTransactions = [
  { id: '1', description: 'Consultation with Dr. Ayesha Khan', amount: '- ₹500', date: 'Apr 10, 2025' },
  { id: '2', description: 'Wallet Top-up', amount: '+ ₹1000', date: 'Apr 8, 2025' },
  { id: '3', description: 'Consultation with Dr. Ramesh', amount: '- ₹400', date: 'Apr 3, 2025' },
];

export default function WalletScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>My Wallet</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for symmetry */}
      </View>

      {/* Wallet Balance */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>₹2,500</Text>
        <TouchableOpacity style={styles.topupButton}>
          <Text style={styles.topupButtonText}>Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction History */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {mockTransactions.map((tx) => (
          <View key={tx.id} style={styles.transactionCard}>
            <View style={styles.txRow}>
              <Text style={styles.txDescription}>{tx.description}</Text>
              <Text style={[styles.txAmount, { color: tx.amount.startsWith('+') ? '#4CAF50' : '#E53935' }]}>
                {tx.amount}
              </Text>
            </View>
            <Text style={styles.txDate}>{tx.date}</Text>
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
  balanceCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 2,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  topupButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1d4ed8',
    borderRadius: 20,
  },
  topupButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  transactionCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 1,
  },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  txDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    paddingRight: 8,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: '600',
  },
  txDate: {
    fontSize: 12,
    color: '#888',
  },
});
