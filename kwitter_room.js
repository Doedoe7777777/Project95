
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDBGZUYHw-jYXvxA_KFlJUPRpSvOrD8dxM",
      authDomain: "kwitter-2eec9.firebaseapp.com",
      databaseURL: "https://kwitter-2eec9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2eec9",
      storageBucket: "kwitter-2eec9.appspot.com",
      messagingSenderId: "1019736908418",
      appId: "1:1019736908418:web:910a1c1100c05f85228a9b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
