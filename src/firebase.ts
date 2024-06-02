import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6QRr6rl1YIM_XwFjWypJUXFSBaoxk6Xk",
  authDomain: "assessment-83167.firebaseapp.com",
  projectId: "assessment-83167",
  storageBucket: "assessment-83167.appspot.com",
  messagingSenderId: "330610811584",
  appId: "1:330610811584:web:b9c5b6257c7aaa7fafc325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app