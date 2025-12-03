// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGvzfuf4JoIbKkKN2dlUmIq7QBO1nQbhM",
  authDomain: "hero-apps-9510e.firebaseapp.com",
  projectId: "hero-apps-9510e",
  storageBucket: "hero-apps-9510e.firebasestorage.app",
  messagingSenderId: "219794345694",
  appId: "1:219794345694:web:a2a86b02fba42887be3c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);