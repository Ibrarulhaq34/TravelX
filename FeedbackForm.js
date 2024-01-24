import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
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

  const handleFeedbackSubmit = async () => {
    if (currentUser && feedback) {
      try {
        const feedbackObject = {
          userId: currentUser.uid,
          userEmail: currentUser.email,
          feedback: feedback,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        };
  
    
        await firebase.firestore().collection('feedbacks').add(feedbackObject);
  
        Alert.alert('Feedback submitted successfully!');
  
      
        setFeedback('');
      } catch (error) {
        console.error('Error submitting feedback:', error);
        Alert.alert('Error submitting feedback. Please try again.');
      }
    } else {
      Alert.alert('Please enter your feedback before submitting.');
    }
  };

  return (
    <View>
      <Text  style={{color:'black'}}>User ID: {currentUser ? currentUser.uid : 'Not logged in'}</Text>
      <Text  style={{color:'black', marginLeft:15}}>How was your experience?</Text>
      <TextInput
        placeholder="Suggest any thing we can improve.."
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
        multiline
        style={styles.inputText}
        placeholderTextColor="black"
      />

      <Button title="Submit Feedback" onPress={handleFeedbackSubmit}  color="blue"  style={styles.submitButton} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputText: {
      color: 'black', 
     fontSize:15, marginLeft:15,
     borderWidth: 1, 
     borderColor: 'black', 
     borderRadius: 5,
     marginBottom:15,
     marginTop:15,
    },
    
  });

export default FeedbackForm;