var firebaseConfig = {
  apiKey: "AIzaSyDt-aQzdaf-3Za468TralymIaeK0okZ46g",
  authDomain: "letchat-5e0fb.firebaseapp.com",
  databaseURL: "https://letchat-5e0fb-default-rtdb.firebaseio.com",
  projectId: "letchat-5e0fb",
  storageBucket: "letchat-5e0fb.appspot.com",
  messagingSenderId: "233209240341",
  appId: "1:233209240341:web:1d5b39f6a7b171d4e8671c"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
      message: msg,
      like: 0
  });
  document.getElementById("msg").value = "";
}