import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = async () => {
    try {
     
      if (newPassword !== confirmPassword) {
        Alert.alert('Error', 'New Password and Confirm Password do not match');
        return;
      }

      if (newPassword.length < 8) {
        Alert.alert('Error', 'New Password must be at least 8 characters');
        return;
      }

      const user = auth().currentUser;

      
      if (!user) {
        console.error('User not authenticated.');
        return;
      }

      
      await user.updatePassword(newPassword);
      console.log('Password changed successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error changing password:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Travelex</Text>
      <Text style={styles.title}>Change Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
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
        <Button title="Change Password" onPress={handleChangePassword} color="#1E90FF" />
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
    color: 'white', 
    marginBottom: 10,
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
});

export default ChangePasswordScreen;
