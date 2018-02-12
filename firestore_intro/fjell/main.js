firebase.initializeApp({
    apiKey: "AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY",
    authDomain: "db01firebase.firebaseapp.com",
    projectId: "db01firebase",
    storageBucket: "db01firebase.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fjellnavnInput = document.querySelector('.fjellnavn');
var mohInput = document.querySelector('.moh');
var fjellbildeInput = document.querySelector('.fjellbilde');
var sendKnapp = document.querySelector('.sendit');

sendKnapp.addEventListener('click', function () {

    var mappeNavn = firebase.storage().ref('fjell');
    var bilde = fjellbildeInput.files[0];
    var oppLasting = mappeNavn.child(bilde.name).put(bilde);

    oppLasting.on('state_changed',
        function () {

        },
        function () {

        },
        function () {
            db.collection('fjell').add({
                fjellnavn: fjellnavnInput.value,
                moh: mohInput.value*1,
                fjellBilde: oppLasting.snapshot.downloadURL
            });
        });

});

