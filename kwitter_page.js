//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC3s-KDCE8N8-Vkf_0V7tFg7UK0aSbdgo8",
      authDomain: "kwitter-b3395.firebaseapp.com",
      databaseURL: "https://kwitter-b3395-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3395",
      storageBucket: "kwitter-b3395.appspot.com",
      messagingSenderId: "920126176787",
      appId: "1:920126176787:web:b6fc1e95da3198e9e549e6"
    };

    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");

    function Send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
