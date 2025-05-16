import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; 

const ContestScreen = () => {
  const navigation = useNavigation(); 
  const navigateToDetails = (contestTitle) => {
    navigation.navigate('ContestDetails', { title: contestTitle });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Icon name="menu" size={24} color="#000" onPress={() => navigation.openDrawer()} /> 
        <Image source={require('../assets/b8c104d2d7c7636d0691ad3499011c410ebd7c61.png')} style={styles.logo} />
        <View style={styles.topIcons}>
          <Icon name="help-circle-outline" size={24} color="#000" style={styles.icon} onPress={() => navigation.navigate('Help')} /> 
          <Icon name="notifications-outline" size={24} color="#000" style={styles.icon} onPress={() => navigation.navigate('Notifications')} />
        </View>
      </View>

      <View style={styles.winnerCard}>
        <Text style={styles.winnerTitle}>Win IPhone 16 Pro Max Contest</Text>
        <View style={styles.winnerRow}>
          <Image source={require('./assets/winner.png')} style={styles.profilePic} />
          <View style={styles.winnerInfo}>
            <Text style={styles.winnerName}>Harshada Yenurkar</Text>
            <Text style={styles.winnerMasked}>**********765</Text>
            <TouchableOpacity style={styles.winnerButton} onPress={() => navigation.navigate('WinnerProfile', { name: 'Harshada Yenurkar' })}> 
              <Text style={styles.winnerButtonText}>Winner</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/830f946df5b2a3fffb50323bf1aeeef48b406527.jpg')} style={styles.phonePic} />
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab} onPress={() => navigation.navigate('LiveContests')}>
          <Text style={styles.tabText}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('UpcomingContests')}> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab} onPress={() => navigation.navigate('ClosedContests')}> 
          <Text style={styles.tabTextInactive}>Closed</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contestCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.contestTitle}>Win IPhone 16 Pro Max</Text>
          <Text style={styles.grayText}>
            <Icon name="time-outline" size={14} /> 7 Days Left
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Image source={require('../assets/830f946df5b2a3fffb50323bf1aeeef48b406527.jpg')} style={styles.cardImage} />
          <View>
            <Text style={styles.cardWinnerText}>1 Winner</Text>
            <TouchableOpacity style={styles.joinButton} onPress={() => navigateToDetails('Win IPhone 16 Pro Max')}>
              <Text style={styles.joinButtonText}>Join Now</Text>
            </TouchableOpacity>
            <Text style={styles.grayText}>
              <Icon name="checkmark-circle-outline" size={14} /> Guaranteed Reward
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.contestCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.contestTitle}>Win IPhone 16</Text>
          <Text style={styles.grayText}>
            <Icon name="time-outline" size={14} /> 7 Days Left
          </Text>
        </View>
        <View style={styles.cardContent}>
          <Image source={require('../assets/830f946df5b2a3fffb50323bf1aeeef48b406527.jpg')} style={styles.cardImage} />
          <View>
            <Text style={styles.cardWinnerText}>1 Winner</Text>
            <TouchableOpacity style={styles.joinButton} onPress={() => navigateToDetails('Win IPhone 16')}> 
              <Text style={styles.joinButtonText}>Join Now</Text>
            </TouchableOpacity>
            <Text style={styles.grayText}>
              <Icon name="checkmark-circle-outline" size={14} /> Guaranteed Reward
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: { height: 40, width: 40, resizeMode: 'contain' },
  topIcons: { flexDirection: 'row' },
  icon: { marginLeft: 10 },

  winnerCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  winnerTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  winnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  winnerInfo: { flex: 1, marginLeft: 10 },
  winnerName: { fontWeight: 'bold', fontSize: 16 },
  winnerMasked: { fontSize: 14, color: '#444' },
  winnerButton: {
    backgroundColor: '#111',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  winnerButtonText: { color: '#fff', fontSize: 12 },
  phonePic: { width: 50, height: 50, resizeMode: 'contain' },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  activeTab: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#222',
  },
  inactiveTab: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  tabText: { color: '#fff', fontWeight: 'bold' },
  tabTextInactive: { color: '#222', fontWeight: 'bold' },

  contestCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contestTitle: { fontWeight: 'bold', fontSize: 14 },
  grayText: { fontSize: 12, color: '#888', marginTop: 5 },

  cardContent: { flexDirection: 'row', alignItems: 'center' },
  cardImage: { width: 60, height: 60, marginRight: 10 },
  cardWinnerText: { fontWeight: 'bold', marginBottom: 5 },

  joinButton: {
    backgroundColor: '#222',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
  },
  joinButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default ContestScreen;