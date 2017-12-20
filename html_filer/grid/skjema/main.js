firebase.initializeApp({
    apiKey: "AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY",
    authDomain: "db01firebase.firebaseapp.com",
    projectId: "db01firebase",
    storageBucket: "db01firebase.appspot.com"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var fornavnE = document.querySelector('.fornavn');
var etternavnE = document.querySelector('.etternavn');
var tlfE = document.querySelector('.tlf');
var epostE = document.querySelector('.epost');
var textE = document.querySelector('.text');
var knappE = document.querySelector('.sendit');

knappE.addEventListener('click', function () {

        db.collection('tilbakemeldinger').add({
            Navn: fornavnE.value,
            Etternavn: etternavnE.value,
            Telefon: tlfE.value,
            Epost: epostE.value,
            Tilbakemelding: textE.value
        });

        textE.value = "";
        epostE.value = "";
        tlfE.value = "";
        etternavnE.value = "";
        fornavnE.value = "";
});

