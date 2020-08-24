import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

console.log("ready");

firebase.initializeApp({
  apiKey: "AIzaSyAvG9Dd3Wecyzc9jby8yiC0z210sZBjmvI",
  authDomain: "project-manathan-781227.firebaseapp.com",
  databaseURL: "https://project-manathan-781227.firebaseio.com",
  projectId: "project-manathan-781227",
  storageBucket: "project-manathan-781227.appspot.com",
  messagingSenderId: "697524608485",
  appId: "1:697524608485:web:c5990129bf8b6c3643230c",
  measurementId: "G-TVDE4JMC09",
});

export const auth = firebase.auth();
export const db = firebase.firestore();