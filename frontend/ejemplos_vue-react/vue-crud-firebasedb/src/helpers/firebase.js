import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyAsmM0ZVE58zUjeU_Za3Yj5LXwsRXGgprQ",
  authDomain: "crud-vue-realtimedb.firebaseapp.com",
  databaseURL: "https://crud-vue-realtimedb.firebaseio.com",
  projectId: "crud-vue-realtimedb",
  storageBucket: "crud-vue-realtimedb.appspot.com",
  messagingSenderId: "965227333614",
  appId: "1:965227333614:web:26653ea18a78cf08f730ff"
})


export const db = app.database()
export const dbRef = db.ref('asistentes')
