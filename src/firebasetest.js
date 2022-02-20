import firebase from "firebase/app";
import { doc, getDoc,collection } from "firebase/firestore";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

const moviesRef = collection(db, "movies");

const firebaseConfig = {
    // firebaseconfig keys
    apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    projectId: "disneyplus-clone-a33d5",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "37918794208",
    appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    measurementId: "G-DRVLJKWRWG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const docRef = doc(db, "movies");
const docSnap = await getDoc(docRef);
function callMovies() {
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

    }
}
export default callMovies()
