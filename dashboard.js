document.getElementById("logout").onclick = function() {
    if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();

        var url = "index.html";
        window.open(url, '_top');
    }
};


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        window.alert("You are not signin!");
        var url = "index.html";
        window.open(url, '_top');
    }
});