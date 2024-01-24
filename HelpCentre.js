import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpCentre = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Help Centre</Text>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Q: What is Travelex and how does it work?</Text>
        <Text style={styles.answer}>
          A: Travelex simplifies travel planning, offering intuitive trip organization and seamless accommodation bookings. With user-friendly features, it's your go-to app for stress-free travel arrangements.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Q: Is Tarvelex available for both Android and iOS?</Text>
        <Text style={styles.answer}>
          A: Yes, Travelex is available on both IOS and Android.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Q: How do I reset my password?</Text>
        <Text style={styles.answer}>
          A: To reset your password, go to the login screen and click on the
          'Forgot Password' link. Follow the instructions sent to your email.
        </Text>
      </View>

      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0ffff', 
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'bold',
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default HelpCentre;
