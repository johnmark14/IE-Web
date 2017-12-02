 // if user is signin then signout
 // [START signout]
 firebase.auth().signOut();
 // [END signout]
 var txtusername;
 var txtpassword;

 document.getElementById("btnsubmit").onclick = function() {
     document.activeElement.blur();
     progressBar(true);
     getData();
     checkuser();
 };

 document.getElementById('username').onkeydown = function(e) {
     var key = e.keyCode ? e.keyCode : e.which;
     if (key == 13) {
         txtusername = document.getElementById('username').value;
         txtpassword = document.getElementById('password').value;
         if (txtusername !== "" && txtpassword !== "") {
             document.activeElement.blur();
             progressBar(true);
             getData();
             checkuser();
         }
     }
 };

 document.getElementById('password').onkeydown = function(e) {
     var key = e.keyCode ? e.keyCode : e.which;
     if (key == 13) {
         // store the data of input
         txtusername = document.getElementById('username').value;
         txtpassword = document.getElementById('password').value;
         if (txtusername !== "" && txtpassword !== "") {
             document.activeElement.blur();
             progressBar(true);
             getData();
             checkuser();
         }
     }
 };

 function getData() {

     // store the data of input
     txtusername = document.getElementById('username').value;
     txtpassword = document.getElementById('password').value;

     // Quick validation
     if (txtusername == "" || txtpassword == "") {
         window.alert("Please enter a value for username & password");
         progressBar(false);
         return;
     } else {

         firebase.auth().signInWithEmailAndPassword(txtusername, txtpassword).catch(function(error) {
             // Handle Errors here.
             var errorCode = error.code;
             var errorMessage = error.message;

             if (errorCode === 'auth/wrong-password') {
                 window.alert("Wrong Email or Password");
                 progressBar(false);
             } else {
                 window.alert(errorMessage);
                 progressBar(false);
             }
             return;
         });
     }
 };

 function checkuser() {
     firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
             // User is signed in.
             var displayName = user.displayName;
             var email = user.email;
             //   var emailVerified = user.emailVerified;
             //   var photoURL = user.photoURL;
             //   var isAnonymous = user.isAnonymous;
             //   var uid = user.uid;
             //   var providerData = user.providerData;

             // document.getElementById('welcome').innerHTML = email;

             var url = "dashboard.html";
             window.open(url, '_top');

             // ...
         } else {
             // User is signed out.
             // ...
         }
     });
 }

 function progressBar(bool) {
     var progress = document.getElementById('logprogress');

     if(bool) {
         progress.style.display ='block';
         
     } else {
        progress.style.display ='none';
     }

 }