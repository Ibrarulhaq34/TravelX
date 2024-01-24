// LegalInfoScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LegalInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Legal Information</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Terms of Service</Text>
        <Text style={styles.sectionContent}>
          Welcome to Travlex!

          1. Account Registration:
          You may need to create an account to use certain features of our app. Ensure that the information provided during registration is accurate and up-to-date.

          2. User Conduct:
          You agree not to engage in any activity that may interfere with the proper functioning of the app, including but not limited to hacking, data mining, or any activity that violates applicable laws.

          3. Content:
          Users are responsible for the content they post on the app. We reserve the right to remove any content that violates these Terms or is deemed inappropriate.

          4. Privacy:
          Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.

          5. Termination:
          We reserve the right to terminate or suspend your account and access to the app for any reason without notice.

          6. Changes to Terms:
          We may update these Terms from time to time. Any changes will be effective upon posting the revised Terms on the app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Privacy Policy</Text>
        <Text style={styles.sectionContent}>
          Welcome to the Privacy Policy of Travlex!

          1. Information We Collect:
          We collect personal information, such as your name, email, and location, to provide our services. We do not sell or share this information with third parties.

          2. Usage of Information:
          We use your information to improve our services, personalize your experience, and communicate with you. We may also use aggregated data for analytical purposes.

          3. Cookies:
          We use cookies to enhance your experience on our app. You can disable cookies in your browser settings, but this may affect your app experience.

          4. Security:
          We take reasonable measures to protect your information, but no method of transmission over the internet or electronic storage is 100% secure.

          5. Third-Party Links:
          Our app may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites.

          6. Changes to Privacy Policy:
          We may update our Privacy Policy from time to time. Changes will be effective upon posting the revised policy on the app.
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
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
  },
});

export default LegalInfo;
