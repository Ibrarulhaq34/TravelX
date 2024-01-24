// index.js or App.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { firebaseConfig } from './firebase'; // Import your Firebase configuration
import { firebase } from '@react-native-firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);

