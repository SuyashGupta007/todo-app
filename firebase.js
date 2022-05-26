const firebaseConfig = {
  apiKey: "AIzaSyCpye8ccw6J05uYbadLo4CzOgVhzbvKBZY",

  authDomain: "to-do-live-a5a6d.firebaseapp.com",

  projectId: "to-do-live-a5a6d",

  storageBucket: "to-do-live-a5a6d.appspot.com",

  messagingSenderId: "749035866773",

  appId: "1:749035866773:web:31bd5685ec768caf4a699c",

  measurementId: "G-LMH29NTWKV",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
