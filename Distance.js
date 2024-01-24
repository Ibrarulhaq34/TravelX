import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Distance = () => {
  const [location1, setLocation1] = useState({
    name: '',
    latitude: 0,
    longitude: 0,
  });

  const [location2, setLocation2] = useState({
    name: '',
    latitude: 0,
    longitude: 0,
  });

  const [difference, setDifference] = useState(null);

  const calculateDifference = () => {
    const latitudeDiff = location2.latitude - location1.latitude;
    const longitudeDiff = location2.longitude - location1.longitude;

    const latitudeCost = Math.abs(latitudeDiff * 0.4).toFixed(2);
    const longitudeCost = Math.abs(longitudeDiff * 0.4).toFixed(2);

    const totalCost = (parseFloat(latitudeCost) + parseFloat(longitudeCost)).toFixed(2);

    setDifference({
      name1: location1.name,
      name2: location2.name,
      latitudeLongitude1: `${location1.latitude.toFixed(6)}, ${location1.longitude.toFixed(6)}`,
      latitudeLongitude2: `${location2.latitude.toFixed(6)}, ${location2.longitude.toFixed(6)}`,
      latitudeDifference: latitudeDiff.toFixed(6),
      longitudeDifference: longitudeDiff.toFixed(6),
      latitudeCost,
      longitudeCost,
      totalCost,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Cost Estimate</Text>

      <TextInput
        placeholder="Enter Location 1 Name"
        onChangeText={(text) => setLocation1({ ...location1, name: text })}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Location 1 Latitude"
        keyboardType="numeric"
        onChangeText={(text) => setLocation1({ ...location1, latitude: parseFloat(text) })}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Location 1 Longitude"
        keyboardType="numeric"
        onChangeText={(text) => setLocation1({ ...location1, longitude: parseFloat(text) })}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Location 2 Name"
        onChangeText={(text) => setLocation2({ ...location2, name: text })}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Location 2 Latitude"
        keyboardType="numeric"
        onChangeText={(text) => setLocation2({ ...location2, latitude: parseFloat(text) })}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter Location 2 Longitude"
        keyboardType="numeric"
        onChangeText={(text) => setLocation2({ ...location2, longitude: parseFloat(text) })}
        style={styles.input}
      />

     
      <TouchableOpacity style={styles.button} onPress={calculateDifference}>
        <Text style={styles.buttonText}>Calculate Cost</Text>
      </TouchableOpacity>

   
      {difference && (
        <View style={{ paddingTop: 15 }}>
          <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>{`Location 1: ${difference.name1}\nLatitude/Longitude 1: ${difference.latitudeLongitude1}\nLocation 2: ${difference.name2}\nLatitude/Longitude 2: ${difference.latitudeLongitude2}\nLatitude Difference: ${difference.latitudeDifference} (Cost: $${difference.latitudeCost})\nLongitude Difference: ${difference.longitudeDifference} (Cost: $${difference.longitudeCost})\nTotal Cost: $${difference.totalCost}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
    textDecorationLine:'underline',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Distance;
