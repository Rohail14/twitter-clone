import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBeTwU2_qpuRisFMrL5pvxbykWM9pr09CA",
    authDomain: "twitter-clone-1414.firebaseapp.com",
    projectId: "twitter-clone-1414",
    storageBucket: "twitter-clone-1414.appspot.com",
    messagingSenderId: "730920927911",
    appId: "1:730920927911:web:11b84033aca74c67c15182"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export { db,storage };