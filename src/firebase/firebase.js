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

database
  .ref()
  .set({
    name: 'Max Garceau',
    age: 26,
    isSingle: true,
    location: {
      city: 'Nashville',
      country: 'United States'
    }
  })
  .then(() => {
    console.log('Data is saved');
  })
  .catch(e => {
    console.log('This failed.', e);
  });

  database.ref('isSingle').set(null);

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove successful!');
//   })
//   .catch(e => {
//     console.log('Remove failed.', e);
//   });
