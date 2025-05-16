import React, { useState } from 'react';
import {View,Text,TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert,} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather'; 

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isFormValid =
    fullName &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword &&
    termsAccepted;

  const handleRegister = () => {
    if (!isFormValid) {
      Alert.alert('Error', 'Please fill in all fields correctly.');
      return;
    }

    Alert.alert('Success', 'Registration successful!');
    // Add actual registration or API logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>TOUCH THE BAT</Text>

      <TextInput
        placeholder="Enter Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={!showPassword}
      />

      <View style={styles.passwordWrapper}>
        <TextInput
          placeholder="Enter Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
          tintColors={{ true: '#000', false: '#aaa' }}
        />
        <Text>
          I agree to the <Text style={styles.bold}>Terms and Conditions</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: isFormValid ? '#111' : '#ccc' }]}
        onPress={handleRegister}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bold: {
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
     backgroundColor: '#1e1e1e',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
