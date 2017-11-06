const firebase = require('firebase');
firebase.initializeApp({
  databaseURL: ""
});


const DB =  firebase.database().ref('people');


function update(id){
    DB.child(id).update(jack);
    console.log('Congrats! user id ' +id+ '  has been updated successfully!');
}


const jack = ({
    name: 'jack bauer',
    age: 38,
    city: 'Los Angeles',
    gender:'male' 
    
});

update(2);