firebase.initializeApp({
    apiKey: "AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY",
    authDomain: "db01firebase.firebaseapp.com",
    projectId: "db01firebase",
    storageBucket: "db01firebase.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var tabell = document.querySelector('.tabell');
var fart = document.querySelector('.fart');
var bil = document.querySelector('.bil');
var navn = document.querySelector('.navn');
var knapp = document.querySelector('.knapp');

knapp.addEventListener('click', function () {
    db.collection('fartsregister').add({
        navn: navn.value,
        bil: bil.value,
        fart: fart.value
    });
    fart.value = "";
    bil.value = "";
    navn.value = "";
});

var ref = db.collection('fartsregister');

ref.onSnapshot(function (data) {
    tabell.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        tabell.innerHTML += "<tr>" + "<th>" + document[x].data().navn + "</th>" +
                "<th>" + document[x].data().bil + "</th>" +
                "<th>" + document[x].data().fart + "</th>" + "</tr>";
    }
});
