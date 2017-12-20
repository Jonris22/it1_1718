firebase.initializeApp({
    apiKey: 'AIzaSyBFZ5keiOr84fYEyY6Npaw-n7LCJhoHyTY',
    authDomain: 'huskeliste-419be.firebaseapp.com',
    projectId: 'huskeliste-419be'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var forslagE = document.querySelector('.todo');
var senditE = document.querySelector('.sendit');
var listeE = document.querySelector('.huskeliste');

senditE.addEventListener('click', function () {
    db.collection('huskeliste').add({
        forslag: forslagE.value
    });
    forslagE.value= "";
});


var ref = db.collection('huskeliste');

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" +  dokument[x].data().forslag + "</li>";
    }
});