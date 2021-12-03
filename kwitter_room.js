// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3s-KDCE8N8-Vkf_0V7tFg7UK0aSbdgo8",
  authDomain: "kwitter-b3395.firebaseapp.com",
  databaseURL: "https://kwitter-b3395-default-rtdb.firebaseio.com",
  projectId: "kwitter-b3395",
  storageBucket: "kwitter-b3395.appspot.com",
  messagingSenderId: "920126176787",
  appId: "1:920126176787:web:b6fc1e95da3198e9e549e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " +user_name;
function addRoom(){
  room_name=document.getElementById("room_name").value
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}