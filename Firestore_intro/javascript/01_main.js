firebase.initializeApp({
    apiKey: 'AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY',
    authDomain: 'db01firebase.firebaseapp.com',
    projectId: 'db01firebase'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tittelE = document.querySelector('.tittel');
var tekstE = document.querySelector('.tekst');
var knappE = document.querySelector('.knapp');

knappE.addEventListener('click', function () {
    db.collection("mappe").add({
        tekst: tekstE.value,
        titel: tittelE.value
    });
    tittelE.value = "";
    tekstE.value = "";
});



