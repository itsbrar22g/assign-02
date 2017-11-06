const firebase = require('firebase');
firebase.initializeApp({
  databaseURL: ""
});

const DB =  firebase.database().ref('people');

DB.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});