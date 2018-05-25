import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBwRVJvzyRsF14BZo5PaPrfmZdmtTQOL4U',
  authDomain: 'expensify-bd648.firebaseapp.com',
  databaseURL: 'https://expensify-bd648.firebaseio.com',
  projectId: 'expensify-bd648',
  storageBucket: 'expensify-bd648.appspot.com',
  messagingSenderId: '934401696338'
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('Snapshot Key: ', snapshot.key, ' Value: ', snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log('Snapshot Key: ', snapshot.key, ' Value: ', snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// setTimeout(() => {
//   database.ref('expenses').update({
//     '-LDJOLPgbJeoGyAAAhRM/amount': 839723095
//   });
// }, 5000);

// const expenseOne = {
//   description: 'Food',
//   note: 'Grocery shopping 3',
//   amount: 30,
//   createdAt: '5-23-18'
// };

// const expenseTwo = {
//   description: 'House Hold',
//   note: 'Toothpaste',
//   amount: 7,
//   createdAt: '5-18-18'
// };

// const expenseThree = {
//   description: 'Fun',
//   note: 'Drinks with Fawn',
//   amount: 6,
//   createdAt: '5-24-18'
// };

// const updateFirebase = (item) => {
//   item.map((e) => {
//     database.ref('expenses').push(e);
//   });
// };

// updateFirebase([expenseOne, expenseTwo, expenseThree]);

// database.ref('expenses').push({
//   expenseOne,
//   expenseTwo,
//   expenseThree
// });
// database.ref('notes/-LDJIsItJcD63SPrZNtX').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Angular, etc'
// });

// const firebaseNotes = {
//   notes: {
//     alsdflkasdjf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     aklsgfkgl: {
//       title: 'Another note!',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note!',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().update({
//   name: 'Max Garceau',
//   'job/title': 'Web Developer/Music Producer',
//   'job/company': 'maxgareau.me and Songwriter Shelter Studios'
// });

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val().name + ' is a ' + snapshot.val().job.title + ' at ' + snapshot.val().job.company + '.');
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Maxwell',
//     'job/title': 'Incredible Badass',
//     'job/company': 'anything he wants to do'
//   });
// }, 3000);

// database
//   .ref()
//   .set({
//     name: 'Max Garceau',
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Music Producer',
//       company: 'Self Employed'
//     },
//     location: {
//       city: 'Nashville',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(e => {
//     console.log('This failed.', e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/title': 'Web Developer/Music Producer',
//   'location/city': 'Austin'
// });

// database.ref('isSingle').set(null);

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove successful!');
//   })
//   .catch(e => {
//     console.log('Remove failed.', e);
//   });
