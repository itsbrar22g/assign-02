const firebase = require('firebase');
firebase.initializeApp({
  databaseURL: ""
});

const DB =  firebase.database().ref('people');


function removePerson(id){
    DB.child(id).remove();
//    var name = DB.child(id).once('value',  function(snapshot));
    console.log( 'user id '+id +' has been removed from the database');
}

removePerson(4);
