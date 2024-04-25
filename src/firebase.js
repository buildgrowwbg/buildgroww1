// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoL9BKWxdDVJHIe2SN882tz050oLH2f9I",
  authDomain: "my-project-2-78580.firebaseapp.com",
  projectId: "my-project-2-78580",
  storageBucket: "my-project-2-78580.appspot.com",
  messagingSenderId: "882806519413",
  appId: "1:882806519413:web:0f707185b5b76ebfec2a3c",
  measurementId: "G-TZG1ZYSSZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;