import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      
      if (email === '' || password === '') {
        Alert.alert('Error', 'Please fill in all the fields');
        return;
      }
  
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User signed in successfully!');
      navigation.navigate('Home1');
    } catch (error) {
      console.error('Error during sign-in:', error.message);
      Alert.alert('Error', 'Invalid email or password');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Travelex</Text>
      <Text style={styles.title}>Login</Text>
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
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleSignIn} color="#1E90FF" />
      </View>
      <Text style={styles.signInLabel}>Don't have an account?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} color="#00008B" />
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
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00008B',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', 
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
    borderRadius: 10, 
  },
  signInLabel: {
    marginTop: 20,
    marginBottom: 10,
    color: 'white', 
  },
});

export default SignInScreen;
