import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyB9HnV5ZzN_qYoE6ctKgv2nM3P_M468h_4",
  authDomain: "rn-messaging-app.firebaseapp.com",
  databaseURL: "https://rn-messaging-app.firebaseio.com",
  projectId: "rn-messaging-app",
  storageBucket: "rn-messaging-app.appspot.com",
  messagingSenderId: "831374138853",
  appId: "1:831374138853:web:c8ca84e13ae91758f6630c"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);