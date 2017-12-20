firebase.initializeApp({
    apiKey: 'AIzaSyBgMPvrHxT5aVsoqdJJyAADgjftCUBL-eY',
    authDomain: 'db01firebase.firebaseapp.com',
    projectId: 'db01firebase'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var responsE = document.querySelector('.tilbakemelding');
var emailE = document.querySelector('.email');
var alderE = document.querySelector('.alder');
var navnE = document.querySelector('.navn');
var knappE = document.querySelector('.sendit');
var listeE = document.querySelector('.liste');

knappE.addEventListener('click', function () {
    db.collection('tilbakemelding').add({
        Navn: navnE.value,
        Alder: alderE.value,
        Email: emailE.value,
        Tilbakemelding: responsE.value
    });
    navnE.value = "";
    alderE.value = "";
    emailE.value = "";
    responsE.value = "";
});


var ref = db.collection('tilbakemelding');

ref.onSnapshot(function (data) {
    listeE.innerHTML = "";
    var dokument = data.docs;
    for(var x in dokument){
        listeE.innerHTML += "<li>" + dokument[x].data().Navn + " " + document[x].data().Alder + "år" + "<br>" + dokument[x].data().Tilbakemelding + "</li>";
    }
});