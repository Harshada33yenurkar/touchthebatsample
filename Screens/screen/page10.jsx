import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.noteTitle}>Note:</Text>
        <Text style={styles.noteText}>
          Winner will be announced after 7 days. If you’re the winner, you’ll get information in the notification and an email from Touch the Bat.
        </Text>
      </View>

    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noteText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
