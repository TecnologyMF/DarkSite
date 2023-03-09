// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
  apiKey: 'AIzaSyDS2137P6PqXFb0etMMOri2YLTQnSFC7fc',
  authDomain: 'website-pelis.firebaseapp.com',
  projectId: 'website-pelis',
  storageBucket: 'website-pelis.appspot.com',
  messagingSenderId: '931875713053',
  appId: '1:931875713053:web:820b1470b0fe9bbbf596f4',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }