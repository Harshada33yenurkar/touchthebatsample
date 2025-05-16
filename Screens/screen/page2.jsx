import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>TOUCH THE BAT</Text>
      </View>

      <TextInput placeholder="Enter Email" style={styles.input} />
      <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account?
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}> Signup</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff'
  },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoText: { fontSize: 24, fontWeight: 'bold' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#1e1e1e', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10,
  },
  loginButtonText: { color: '#fff', fontWeight: 'bold' },
  signupText: { textAlign: 'center', marginTop: 20 },
  signupLink: { color: '#007BFF' },
});
