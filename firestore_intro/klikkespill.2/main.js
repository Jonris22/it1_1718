firebase.initializeApp({
    apiKey: "AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY",
    authDomain: "db01firebase.firebaseapp.com",
    projectId: "db01firebase",
    storageBucket: "db01firebase.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


var navnE = document.querySelector('.navn');
var startE = document.querySelector('.start');
var klikkE = document.querySelector('.klikk');
var klikkverdiE = document.querySelector('.klikkverdi');
var listeE = document.querySelector('.poengliste');
var klikkebarE = document.querySelector('.bar');
var topscoreE = document.querySelector('.topscore');
var antKlikk = 0;
var klart = false;
var start = false;
var grense = 67*80;
var navn = "";

var allowed = true;
$(document).keydown(function(event) {
    if (event.repeat != undefined) {
        allowed = !event.repeat;
    }
    if (!allowed) return;
    allowed = false;
});
$(document).keyup(function(e) {
    allowed = true;
});
$(document).focus(function(e) {
    allowed = false;
});


klikkE.addEventListener('click', function () {

    if(klart){
        if(allowed){
            antKlikk += 67;
            klikkverdiE.innerHTML = antKlikk;
            klikkebarE.style.height = 100*antKlikk/grense + "%";
        }
    }
    else if(start){
        klart = true;

        setTimeout(function () {
            db.collection("spill").add({
                navn: navn,
                poeng: antKlikk
            });
            klikkE.innerHTML = navn + " fikk " +  antKlikk + " poeng <br> <br> Trykk på start for å starte nytt spill";
            antKlikk=0;
            klart = false;
            start = false;

        }, 5000);
    }
});
startE.addEventListener('click', function () {spill = "ikkeKlart";
    navn = prompt("Skriv inn navnet ditt");
    start = true;
    klikkverdiE.innerHTML = "0";
    klikkebarE.style.height = "1%";
    klikkE.innerHTML = "Klikk så fort du kan når du er klar, " + navn;


});

var mappe = db.collection('spill').orderBy('poeng', 'desc').limit(20);
var topscore = 0;
mappe.onSnapshot(function(data){
    listeE.innerHTML = "";
    var plass = 0;
    var dokumenter = data.docs;
    for(var x in dokumenter){
        plass += 1;
        listeE.innerHTML += "<tr><td>"+ plass +"</td><td>" + dokumenter[x].data().navn + "</td><td> " + dokumenter[x].data().poeng + "</td></tr>"
    }
    topscore = dokumenter[0].data().poeng;
    topscoreE.style.bottom = 100* topscore/grense + "%";
    topscoreE.innerHTML = "Rekord - " + dokumenter[0].data().navn + " - " + topscore + " poeng";

});