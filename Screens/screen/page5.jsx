import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const participants = [
  '*********759',
  '*********123',
  '*********456',
  '*********789',
  '*********012',
  '*********321',
];

const ContestDetailScreen = () => {
  return (
    <View style={styles.container}>
    
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

  
      <Text style={styles.title}>100% Chance to win</Text>
      <Text style={styles.subtitle}>
        Join first and get a chance to become a winner
      </Text>

      <Image source={require('../assets/830f946df5b2a3fffb50323bf1aeeef48b406527.jpg')}style={styles.image} /> 

      <Text style={styles.productName}>IPhone 16 Pro Max</Text>

    
      <View style={styles.participantBox}>
        {participants.map((number, index) => (
          <View key={index} style={styles.participantRow}>
            <MaterialIcons name="person" size={18} color="#999" />
            <Text style={styles.participantText}>{number}</Text>
            <Text style={styles.joined}>Joined</Text>
          </View>
        ))}
      </View>

     
      <Text style={styles.oldPrice}>Entry: ₹29</Text>
      <TouchableOpacity style={styles.newPriceButton}>
        <Text style={styles.newPrice}>₹19</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 8,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  participantBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  participantRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  participantText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  joined: {
    color: '#aaa',
    fontSize: 14,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 14,
    marginBottom: 8,
  },
  newPriceButton: {
    backgroundColor: '#111',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  newPrice: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContestDetailScreen;
