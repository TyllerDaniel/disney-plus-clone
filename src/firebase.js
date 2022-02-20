import  {initializeApp}  from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    // firebaseconfig keys
    apiKey: "AIzaSyDdvbpBGMPfkpQmMpdd2m7HEhwOM-pyeU4",
    authDomain: "disneyplus-clone-d8672.firebaseapp.com",
    projectId: "disneyplus-clone-d8672",
    storageBucket: "disneyplus-clone-d8672.appspot.com",
    messagingSenderId: "58351980408",
    appId: "1:58351980408:web:f7de3121dd10e7d0adc28d",
    measurementId: "G-3C45DXY5ED"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();