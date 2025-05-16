import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UpiScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backArrow}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Enter UPI ID"
        placeholderTextColor="#999"
      />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => console.log('PhonePe selected')}>
          <Image source={require('../assets/2acfb6fb41f7fcb82c3230afdecff714.jpg')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('GPay selected')}>
          <Image source={require('../assets/gpay.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Amazon Pay selected')}>
          <Image source={require('../assets/amazon-logo-amazon-icon-free-free-vector.jpg')} style={styles.icon} />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backArrow: { marginBottom: 40 },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#999',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'nowrap', 
    width: '100%',
    marginBottom: 40,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  continueButton: {
    backgroundColor: '#263238',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UpiScreen;
