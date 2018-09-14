import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCMCaoniwYLmzpIkjLKVlx0na85hBqC4mU',
  authDomain: 'firetest-vaniyokk.firebaseapp.com',
  databaseURL: 'https://firetest-vaniyokk.firebaseio.com',
  projectId: 'firetest-vaniyokk',
  storageBucket: 'firetest-vaniyokk.appspot.com',
  messagingSenderId: '542350480056',
};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
