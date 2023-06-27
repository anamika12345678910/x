// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBsUXHQdJLeNXeuaOz2u1w0tath6n7WcX0",
    authDomain: "classtest-1e950.firebaseapp.com",
    databaseURL: "https://classtest-1e950-default-rtdb.firebaseio.com",
    projectId: "classtest-1e950",
    storageBucket: "classtest-1e950.appspot.com",
    messagingSenderId: "519527497079",
    appId: "1:519527497079:web:1745a0b0cf4b11ad0d3572"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



