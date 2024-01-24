import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const apiKey = 'Enter Your API Key';
        const response = await fetch(
          `https://api.opentripmap.com/0.1/en/places/geoname?name=${route.params.place}&apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Network request failed');
        }

        const data = await response.json();

        if (data.lat && data.lon) {
          setCoordinates({
            latitude: data.lat,
            longitude: data.lon,
          });
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error.message);
      }
    };

    fetchCoordinates();
  }, [route.params.place]);

  return (
    <View style={styles.container}>
      {coordinates && coordinates.latitude !== undefined && coordinates.longitude !== undefined ? (
        <View style={styles.mapContainer}>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: coordinates.latitude,
              longitude: coordinates.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
              }}
              title="Destination"
              description="This is where you go!"
            />
          </MapView>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
