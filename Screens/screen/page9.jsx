import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const VerifiedBadgeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/f4f5324dd96f3065b1ad3f2a8a77d0b175bf2338.png')} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 400,
  },
});

export default VerifiedBadgeScreen;
