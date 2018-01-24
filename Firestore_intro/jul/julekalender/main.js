firebase.initializeApp({
    apiKey: "AIzaSyAaxxR-90yXXlfEyXBkvlwwhr9bvgVjEF0",
    authDomain: "julekalender-17d22.firebaseapp.com",
    databaseURL: "https://julekalender-17d22.firebaseio.com",
    projectId: "julekalender-17d22",
    storageBucket: "julekalender-17d22.appspot.com",
    messagingSenderId: "165652429423"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

/***  Legge til 24 luker
for(var lukenummer = 1; lukenummer<=24; lukenummer++){
    db.collection('kalender').add({
        luke: lukenummer
    });
}
*/

var pakkerE = document.querySelector('.pakker');
var ref = db.collection('kalender').orderBy('luke', 'asc').limit(24);

/***
 Avgrens til 5 luker (eller bare .limit(5))
 var ref = db.collection('kalender').where('luke', '<=', 5);
*/

ref.onSnapshot(function (data) {
    var objekt = data.docs;

    for(var x in objekt){
        pakkerE.innerHTML += "<div class='luke'>" + objekt[x].data().luke + "</div>";
    }

});