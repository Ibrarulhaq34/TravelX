import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    
    const timer = setTimeout(() => {
    
      navigation.replace('Start');
    }, 3000);

  
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travelex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008B', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
  },
});

export default SplashScreen;
