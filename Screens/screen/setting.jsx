import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Platform,StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
     
      <StatusBar backgroundColor="#253135" barStyle="light-content" />

    
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name="edit" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

    
      <View style={styles.profile}>
        <Icon name="person-circle-outline" size={64} color="#fff" />
        <Text style={styles.name}>Harshada Yenurkar</Text>
        <Text style={styles.email}>harshadayenurkar@gmail.com</Text>
      </View>

      
      <View style={styles.settings}>
        <Text style={styles.settingsTitle}>Setting</Text>
       
      </View>

   
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
        <MaterialIcon name="logout" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#253135',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    backgroundColor: '#253135',
    alignItems: 'center',
    paddingVertical: 20,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  email: {
    color: '#fff',
    fontSize: 14,
    marginTop: 2,
  },
  settings: {
    padding: 20,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B757D',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '90%',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
});

export default ProfileScreen;
