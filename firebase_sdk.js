var firebaseConfig = {
    apiKey: "AIzaSyBYPTLbFtvvKFk_Uiqd7LLoPCiPZQhYH9o",
    authDomain: "hashcode2019-e33a1.firebaseapp.com",
    databaseURL: "https://hashcode2019-e33a1.firebaseio.com",
    projectId: "hashcode2019-e33a1",
    storageBucket: "hashcode2019-e33a1.appspot.com",
    messagingSenderId: "75329561517",
    appId: "1:75329561517:web:7f52684ffc1d0b6c9c3724"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//const db=firebase.database.ref();
//db.settings({timestampsInSnapshots: true});
var myFirebase=firebase.database().ref();
var users=myFirebase.child("users");
var form=document.querySelector('#sign-up_form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    users.child(form.username.value).set({
       Email: form.email.value,
        Password: form.password.value
    })
})