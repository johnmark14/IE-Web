(function() {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyD9ozU6c9IADzVCOkTTvGLV36kG6GtdJ1g",
        authDomain: "websiteauth-a419c.firebaseapp.com",
        databaseURL: "https://websiteauth-a419c.firebaseio.com",
        projectId: "websiteauth-a419c",
        storageBucket: "websiteauth-a419c.appspot.com",
        messagingSenderId: "923242195397"
    };
    firebase.initializeApp(config);

    // // Get elements
    // const projectObject = document.getElementById('object');

    // // create reference
    // const dbRefObject = firebase.database().ref().child('object');

    // // Sync object changes
    // dbRefObject.on('value', snap => {
    //     projectObject.innerText = JSON.stringify(snap.val(), null, 3);
    // });

}());