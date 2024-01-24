import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      
      if (email === '' || password === '' || confirmPassword === '') {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
      }
  
      
      if (!isValidEmail(email)) {
        Alert.alert('Error', 'Please enter a valid email address');
        return;
      }
  
      
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Password and Confirm Password do not match');
        return;
      }
  

      const emailExists = await isEmailInUse(email);
      if (emailExists) {
        Alert.alert('Error', 'Email is already in use');
        return;
      }
  
     
      if (password.length < 8) {
        Alert.alert('Error', 'Password must be at least 8 characters');
        return;
      }
  
    
      await auth().createUserWithEmailAndPassword(email, password);

  
      console.log('User registered successfully!');
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error during sign-up:', error.message);
    }
  };
  

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  

  const isEmailInUse = async (email) => {
    const user = await auth().fetchSignInMethodsForEmail(email);
    return user.length > 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignUp} color="#1E90FF" />
      </View>
      <Text style={styles.signInLabel}>Already have an account?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('SignIn')} color="#00008B" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#4682B4', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'lightblue', 
    borderRadius: 10, 
  },
  buttonContainer: {
    width: '60%',
    marginVertical: 10,
    borderRadius: 20,
  },
  signInLabel: {
    marginTop: 20,
    marginBottom: 10,
    color: 'white', 
  },
});

export default SignUpScreen;
