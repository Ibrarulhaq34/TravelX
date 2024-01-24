import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      console.log('User signed out successfully!');
      // Navigate to SignUpScreen after sign-out
      //navigation.navigate('SignUp');
    } catch (error) {
      console.error('Error during sign-out:', error.message);
    }
  };

  const handleChangePassword = () => {
    // Navigate to ChangePasswordScreen
    //navigation.navigate('ChangePassword');
  };

  const handleplaces = () => {
    // Navigate to placesScreen
   // navigation.navigate('Places');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home1' component={HomeScreen1} options={{title:'Cities',headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',}}/>
        <Stack.Screen name='Second' component={SecondScreen} options={{title:'Historical Landmarks',headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',}}/>
        <Stack.Screen name='Third' component={ThirdScreen} options={{title:'Parks',headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',}}/>
        <Stack.Screen name='Four' component={FourScreen} options={{title:'Restaurants',headerStyle: {
              backgroundColor: '#0000FF',
            }, headerTintColor: '#fff',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/city-landmarks-background-video-conferencing_23-2148641671.jpg?w=2000',
          }}
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
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        {/* Use arrow function to navigate to SecondScreen */}
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
          source={{
            uri: 'https://png.pngtree.com/element_origin_min_pic/16/12/07/3e93bbc8adfb365aaaec0658fcf3f214.jpg',
          }}
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
        <TouchableOpacity style={styles.button} >
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
          source={{
            uri: 'https://t3.ftcdn.net/jpg/01/95/04/70/360_F_195047090_nwDH5DvajuXmJNMd2lBPNZr2Bl3ppFyS.jpg',
          }}
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
        <TouchableOpacity style={styles.button} >
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
          source={{
            uri: 'https://img.freepik.com/premium-vector/restaurant-interior-cartoon-scene-with-fancy-furniture-decoration-items-vector-illustration_1284-77399.jpg',
          }}
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
        <TouchableOpacity style={styles.button} >
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


export default HomeScreen;
