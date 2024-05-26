import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwjTQ2I1pnfZ5vhIyRFD7lhi6Q_ig2cuc",
  authDomain: "castelltfg.firebaseapp.com",
  projectId: "castelltfg",
  storageBucket: "castelltfg.appspot.com",
  messagingSenderId: "917026546654",
  appId: "1:917026546654:web:654f5a285a5fd6be70734f",
  measurementId: "G-44NL5QN09F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const formulariosRef = db.collection("participants");

document.addEventListener("DOMContentLoaded", function () {
  // Obtener los datos del formulario
  const formData = {
    entityType: document.querySelector(
      'input[name="entity-type"]:checked'
    ).value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    comments: document.getElementById("comments").value,
  };

  // Agregar el formulario a Firestore
  formulariosRef
    .add(formData)
    .then((docRef) => {
      console.log("Formulario enviado con ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
    });
});