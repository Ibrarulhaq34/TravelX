import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const DetailOfHotel = ({ navigation, route }) => {
  const [myData, setMyData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    getDatabase();
  }, []);


  const getDatabase = async () => {
    try {
      const data = await firestore().collection('Hotels').doc('LjgRY7O7DP95Kdu1qoZc').get();
      setMyData(data._data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckWeather = () => {
    navigation.navigate('Weather', { place: route.params.name });
  };

  const handleMap = () => {
    navigation.navigate('MapScreen', { place: route.params.name});
  };

  const handleFeedback = () => {
    navigation.navigate('FeedbackForm'); 
  };

  const handleProfile = () => {
    navigation.navigate('Profile'); 
  };
  

  const handleBookmark = async () => {
    try {
      if (currentUser) {
   
        await firestore().collection('bookmarks').add({
          place: route.params.name,
          userEmail: currentUser.email,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });
        Alert.alert('Bookmark added successfully!');
      } else {
        Alert.alert('Please log in before bookmarking.');
      }
    } catch (error) {
      console.error('Error adding bookmark:', error);
      Alert.alert('Error adding bookmark. Please try again.');
    }
  };


  
  return (
    <View>
      <ScrollView style={styles.listView}>
        {route.params?.name === 'Nishat Hotel Johar Town' ? (
          <>
            <Image
              source={require('./image/hotel1.png')}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{route.params.name}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleMap}>
                <Text style={styles.btnText}>Map</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>{myData ? myData.d1 : "Loading"}</Text>
          </>
        ) : route.params?.name === 'Mövenpick Hotel Karachi' ? (
          <>
            <Image
              source={require('./image/hotel2.png')}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{route.params.name}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleMap}>
                <Text style={styles.btnText}>Map</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>{myData ? myData.d2 : "Loading"}</Text>
          </>
        ) : route.params?.name === 'Pearl Continental Hotel Malam Jabba' ? (
          <>
            <Image
              source={require('./image/hotel3.png')}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{route.params.name}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleMap}>
                <Text style={styles.btnText}>Map</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>{myData ? myData.d3 : "Loading"}</Text>
          </>
        ) : (
          <>
            <Image
              source={require('./image/hotel4.png')}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{route.params.name}</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleMap}>
                <Text style={styles.btnText}>Map</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>{myData ? myData.d4 : "Loading"}</Text>
          </>
        )}

        <View style={styles.container1}>
          <View style={styles.filler} />
          <TouchableOpacity style={styles.btn} onPress={handleCheckWeather}>
            <Text style={styles.btnText}>Check Weather</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleBookmark}>
            <Text style={styles.btnText}>Bookmark</Text>
          </TouchableOpacity>
            
             <TouchableOpacity style={styles.btn} onPress={handleFeedback}>
            <Text style={styles.btnText}>Give Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleProfile}>
            <Text style={styles.btnText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 310,
    height: 200,
    borderRadius: 10,
  },
  listView: {
    width: "90%",
    alignSelf: "center"
  }
  , container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20, 
    paddingHorizontal: 20, 
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: 'black',

  },
  btn: {
    backgroundColor: '#0000FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 5

  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },

});

export default DetailOfHotel;