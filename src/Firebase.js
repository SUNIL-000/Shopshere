
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbjCX8aPtI--NckVLw6c8qDd5FN1N0Hr4",
  authDomain: "shopshere-b5205.firebaseapp.com",
  projectId: "shopshere-b5205",
  storageBucket: "shopshere-b5205.appspot.com",
  messagingSenderId: "665979379637",
  appId: "1:665979379637:web:9c39c6e02fa29de52803fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
