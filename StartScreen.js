import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travelex</Text>
      <Text style={styles.subtitle}>Your Travel Companion</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('SignIn')} color="#1E90FF" />
      </View>
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
    paddingTop: 50,
    backgroundColor: '#4682B4', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white', 
    marginBottom: 40, 
  },
  subtitle: {
    fontSize: 28,
    color: 'white', 
    marginBottom: 40,
  },
  buttonContainer: {
    width: '70%', 
    marginVertical: 15, 
    borderRadius: 10, 
  },
});

export default StartScreen;
