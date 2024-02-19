
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAmw_RtDvusBvIVmXMWbcvTupkjglK99yM",
    authDomain: "michelle-portfolio.firebaseapp.com",
    projectId: "michelle-portfolio",
    storageBucket: "michelle-portfolio.appspot.com",
    messagingSenderId: "574451515681",
    appId: "1:574451515681:web:2d304ba3aa078c72a77e60",
    measurementId: "G-0ZFS9514EE"
};

const app = initializeApp(firebaseConfig);

export default app;