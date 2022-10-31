// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4J3CAWFKWed7wz8fJemxLi5mcXPGgOYY",
  authDomain: "coffeeness-d24a9.firebaseapp.com",
  projectId: "coffeeness-d24a9",
  storageBucket: "coffeeness-d24a9.appspot.com",
  messagingSenderId: "626870999466",
  appId: "1:626870999466:web:403e65afc7df0a6da6b3d3",
  measurementId: "G-S4GYBR7JNZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
