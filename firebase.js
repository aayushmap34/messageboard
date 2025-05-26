import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgjS4h1ELRcQOVBDsFeMzeJ2YLICt-8FY",
    authDomain: "message-board-project-8971a.firebaseapp.com",
    projectId: "message-board-project-8971a",
    storageBucket: "message-board-project-8971a.firebasestorage.app",
    messagingSenderId: "814701711369",
    appId: "1:814701711369:web:e3c6abfe77aa5b86ff68d8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };