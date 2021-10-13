const firebaseConfig = {
      apiKey: "AIzaSyBIhHGy3LDJDNnpxGW7edALVSGLrrdziGA",
      authDomain: "kwitter-9dab3.firebaseapp.com",
      databaseURL: "https://kwitter-9dab3-default-rtdb.firebaseio.com",
      projectId: "kwitter-9dab3",
      storageBucket: "kwitter-9dab3.appspot.com",
      messagingSenderId: "204234288624",
      appId: "1:204234288624:web:24d8e5ad88f7484d890135",
      measurementId: "G-MRYWPWP56L"
};


firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
roomName = localStorage.getItem("roomName");
 
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name: username,
            message : msg, 
            like : 0
      });
}
function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}

