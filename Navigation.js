import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import StartScreen from './StartScreen';  
import SignInScreen from './SignInScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

import SignUpScreen from './SignUpScreen';

import listOfPlaces from "./listOfPlaces";
import detailOfPlaces from "./detailOfPlaces";

import listOfParks from "./listOfParks";
import detailOfParks from "./detailOfParks";

import listOfHotels from "./listOfHotels";
import detailOfHotel from "./detailOfHotel";

import listOfRestaurant from "./listOfReastaurant";
import detailOfRestaurant from "./detailOfRestaurant";

import listOfHistoricalPlaces from "./listOfHistoricalPlaces";
import detailOfHistoricalPlaces from "./detailOfHistoricalPlaces";
import FeedbackForm from "./FeedbackForm";

import Weather from "./Weather";
import MapScreen from './MapScreen';

import Profile from './Profile';
import Distance from './Distance';
import Currency from './Currency';
import Setting from './Setting';
import HelpCentre from './HelpCentre';
import LegalInfo from './LegalInfo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartScreen} options={{
          title: 'Start', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          title: 'SignUp', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{
          title: 'SignIn', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{
          title: 'ChangePasswordScreen', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>


        <Stack.Screen name='Home1' component={HomeScreen1} options={{
          title: 'Cities', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />

        <Stack.Screen name='Second' component={SecondScreen} options={{
          title: 'Historical Landmarks', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />

        <Stack.Screen name='Third' component={ThirdScreen} options={{
          title: 'Parks', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />

        <Stack.Screen name='Four' component={FourScreen} options={{
          title: 'Restaurants', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />

        <Stack.Screen name='Five' component={FiveScreen} options={{
          title: 'Hotels', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />

        <Stack.Screen name="FeedbackForm" component={FeedbackForm} options={{
          title: 'Feedback', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />


        <Stack.Screen name='Places' component={listOfPlaces} options={{
          title: 'List Of Places', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name='DetailOfPlace' component={detailOfPlaces} options={
          ({ route }) => ({
            title: 'Detail Of : ' + route.params.name, headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',
          })
        } />

        <Stack.Screen name='Parks' component={listOfParks} options={{
          title: 'List Of Parks', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name='DetailOfParks' component={detailOfParks} options={
          ({ route }) => ({
            title: 'Detail Of : ' + route.params.name, headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',
          })
        } />

        <Stack.Screen name='Restaurant' component={listOfRestaurant} options={{
          title: 'List Of Restaurant', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name='DetailOfRestaurant' component={detailOfRestaurant} options={
          ({ route }) => ({
            title: 'Detail Of : ' + route.params.name, headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',
          })
        } />
        <Stack.Screen name='Hotels' component={listOfHotels} options={{
          title: 'List Of Hotels', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name='DetailOfHotel' component={detailOfHotel} options={
          ({ route }) => ({
            title: 'Detail Of : ' + route.params.name, headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',
          })
        } />

        <Stack.Screen name='HistoricalPlaces' component={listOfHistoricalPlaces} options={{
          title: 'List Of HistoricalPlaces', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }} />
        <Stack.Screen name='DetailOfHistoricalPlaces' component={detailOfHistoricalPlaces} options={
          ({ route }) => ({
            title: 'Detail Of : ' + route.params.name, headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',
          })
        } />

        <Stack.Screen name='Profile' component={Profile} options={{
          title: 'Profile', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='Distance' component={Distance} options={{
          title: 'Distance', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='Currency' component={Currency} options={{
          title: 'Currency', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='Setting' component={Setting} options={{
          title: 'Setting', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='HelpCentre' component={HelpCentre} options={{
          title: 'HelpCentre', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='LegalInfo' component={LegalInfo} options={{
          title: 'LegalInfo', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>

        <Stack.Screen name='Weather' component={Weather} options={{
          title: 'Weather', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>
        <Stack.Screen name='MapScreen' component={MapScreen} options={{
          title: 'Map', headerStyle: {
            backgroundColor: '#0000FF',
          }, headerTintColor: '#fff',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/Place.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Cities tell stories; explore chapters
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'black' }}>
          Venture beyond your comfort zone, for in new places, you'll discover not just landscapes but the chapters of your own story
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Places')}>Get Started</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/Hist.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Landmarks echo history's pulse
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'black' }}>
          Walk through the corridors of time; historical landmarks are the footprints that remind us where we've been and inspire us to move forward
        </Text>
      </View>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoricalPlaces')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Third')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/Prk.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Nature's whispers in every step
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'black' }}>
          Parks are canvases painted with the hues of serenity. Step into the masterpiece, breathe in the tranquility
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Parks')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Four')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FourScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/Rest.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Savor the world on your  plate
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'black' }}>
          In the culinary world, every restaurant is a chapter, and every dish is a story. Let your taste buds travel.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Restaurant')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Five')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FiveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./image/Hotel.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Dream big in comfort's embrace wide
        </Text>
        <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, color: 'black' }}>
        Every hotel is a portal to comfort, a sanctuary for wanderers. Rest your head, dream big, and wake up ready to conquer new horizons
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hotels')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home1')}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navigation;