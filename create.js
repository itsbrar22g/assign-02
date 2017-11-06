
const firebase = require('firebase');
firebase.initializeApp({
  databaseURL: ""
});

function addPerson(id, person){
    firebase.database().ref('people').child(id).set(person);
}


//function newPerson(person){
//   firebase.database().ref('people').push(person);
//}


addPerson(2, {
    name: 'jatinder',
    age: 22,
    city: 'surrey',
    gender:'male'
});


addPerson(4,{
    name: 'nathan',
    age: 28,
    city: 'vancouver',
    gender:'male'
});


addPerson(3,{
    name: 'david',
    age: 42,
    city: 'Los Angeles',
    gender:'male' 
});

console.log('Congrats! 3 persons have been added to your database successfully!');