const firebaseConfig = {
    apiKey: "AIzaSyBsUXHQdJLeNXeuaOz2u1w0tath6n7WcX0",
    authDomain: "classtest-1e950.firebaseapp.com",
    databaseURL: "https://classtest-1e950-default-rtdb.firebaseio.com",
    projectId: "classtest-1e950",
    storageBucket: "classtest-1e950.appspot.com",
    messagingSenderId: "519527497079",
    appId: "1:519527497079:web:1745a0b0cf4b11ad0d3572"
  };
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name")
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"            
      });

      localStorage.setItem("room_name",room_name);
window.location = "chat_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     
console.log("Room Name -"+ Room_names);
row = "<div class = 'room_name'  id= "+Room_names+"onclick ='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
document.getElementById("output").innerHTML +=row;

     });});}