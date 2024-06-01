// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi8AajUXB9jpk-zLXFgD0PGyP867A9CxY",
  authDomain: "portafolio-adrian-3648c.firebaseapp.com",
  projectId: "portafolio-adrian-3648c",
  storageBucket: "portafolio-adrian-3648c.appspot.com",
  messagingSenderId: "501551580529",
  appId: "1:501551580529:web:8cdaf071378fb6c33fe2d0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
