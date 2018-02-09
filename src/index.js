import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

 // Initialize Firebase
 var config = {

};
firebase.initializeApp(config);

  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCTDAhIolV969djpEWQuLWIxnKZ__AMuN4",
  //   authDomain: "moiz-chat-application.firebaseapp.com",
  //   databaseURL: "https://moiz-chat-application.firebaseio.com",
  //   projectId: "moiz-chat-application",
  //   storageBucket: "moiz-chat-application.appspot.com",
  //   messagingSenderId: "712048159465"
  // };
  // firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
