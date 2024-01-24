import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Weather = ({ route }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const apiKey = 'Enter Your API Key';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${route.params.place}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          if (data.location && data.current) {
            setWeather({
              location: data.location,
              temp_c: data.current.temp_c,
              condition: data.current.condition,
            });
          } else {
            setWeather(null);
            console.log('Weather data not available for the provided location.');
          }
        } else {
          setWeather(null);
          console.log(data.error.message);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    getWeather();
  }, [route.params.place]);

  const getBackgroundImage = () => {
    if (weather) {
      const temperature = weather.temp_c;

      if (temperature < 0) {
        return require('./image/extreme_cold_background.jpg'); 
      } else if (temperature < 20) {
        return require('./image/cold_background.jpg'); 
      } else if (temperature < 30) {
        return require('./image/mild_background.jpg'); 
      } else if (temperature < 40) {
        return require('./image/warm_background.jpg');
      }else {
        return require('./image/hot_background.jpg'); 
      }
    } else {
     
      return require('./image/default_background.jpg');
    }
    
  };

  return (
    <ImageBackground source={getBackgroundImage()} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Weather for {route.params.place}</Text>

        {weather ? (
          <View style={styles.weatherInfo}>
            <Text>Place: {weather.location.name}</Text>
            <Text>Temperature: {weather.temp_c} °C</Text>
            <Text>Condition: {weather.condition.text}</Text>
          </View>
        ) : (
          <Text>Loading weather data...</Text>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 20,
    borderRadius: 10,
    maxWidth: 300,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  weatherInfo: {
    marginTop: 20,
  },
});

export default Weather;
