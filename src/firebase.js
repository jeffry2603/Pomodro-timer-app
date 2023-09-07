import firebase from "firebase"
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxgIcIH9jRHCwYcoi5ayIqlJi3Ft9ldgQ",
  authDomain: "pomodoro-timer-fa45f.firebaseapp.com",
  projectId: "pomodoro-timer-fa45f",
  storageBucket: "pomodoro-timer-fa45f.appspot.com",
  messagingSenderId: "319899949541",
  appId: "1:319899949541:web:8a72c8bbba8c583ab1b70c",
  measurementId: "G-C0JZDJK2JD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
