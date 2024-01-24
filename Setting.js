import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Setting = ({ navigation }) => {
  const navigateToHelpCentre = () => {
    navigation.navigate('HelpCentre');
  };

  const navigateToLegalInfo = () => {
    navigation.navigate('LegalInfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToHelpCentre}
        >
          <Text style={styles.buttonText}>Help Centre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={navigateToLegalInfo}
        >
          <Text style={styles.buttonText}>Legal Info</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
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

export default Setting;
