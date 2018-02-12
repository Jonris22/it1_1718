firebase.initializeApp({
    apiKey: 'AIzaSyBaAgvAqIcvekZdAIRliUSYxZEuxWdWz3U',
    authDomain: 'klikkespill42.firebaseapp.com',
    projectId: 'klikkespill42'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var navnE = document.querySelector('.navn');
var startE = document.querySelector('.start');
var klikkE = document.querySelector('.klikk');
var listeE = document.querySelector('.poengliste');
var klikkverdiE = document.querySelector('.klikkverdi');

var antKlikk = 0;

klikkE.addEventListener('click', function () {
    antKlikk = antKlikk + 1;
    klikkverdiE.innerHTML = antKlikk;
});

startE.addEventListener('click', function () {
   antKlikk = 0;
   klikkverdiE.innerHTML = antKlikk;

   setTimeout(function () {
       db.collection("spill").add({
           Spiller: navnE.value,
           Poeng: antKlikk
       });
       alert(antKlikk);
       }, 3000);
});


var ref = db.collection('spill').orderBy('Poeng', 'desc').limit(20);
ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokumenter = data.docs;

    for(var x in dokumenter){
        listeE.innerHTML += "<li>" + dokumenter[x].data().Spiller + ": " + dokumenter[x].data().Poeng + "</li>"
    }
});