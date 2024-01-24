import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const unsubscribe = auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });


    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfo}>User ID: {user.uid}</Text>
          <Text style={styles.userInfo}>Email: {user.email}</Text>
        </View>
      ) : (
        <Text style={styles.text}>User not logged in</Text>
      )}

      <Text style={styles.title}>Options</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Currency')}
        >
          <Text style={styles.buttonText}>Currency</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Distance')}
        >
          <Text style={styles.buttonText}>Distance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('Setting')}
        >
          <Text style={styles.buttonText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToScreen('ChangePasswordScreen')}
        >
          <Text style={styles.buttonText}>ChangePasswordScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB'
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db', 
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
