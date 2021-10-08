

import firebase from 'firebase'
import 'firebase/auth'

const configData = {
  apiKey: "AIzaSyBuAam0_nL_5_xBkfabGEQSpMoiMe3HmbU",
  authDomain: "fiverr-demo-11784.firebaseapp.com",
  databaseURL: "https://fiverr-demo-11784.firebaseio.com",
  projectId: "fiverr-demo-11784",
  storageBucket: "fiverr-demo-11784.appspot.com",
  messagingSenderId: "800059146499",
  appId: "1:800059146499:web:dc133c172dcf99d223a936"
}
export const  SignupByEmaiPass= (email, password) => {
    try{
          var appPrimary= firebase.initializeApp(configData, "primary");
          var getPromise = new Promise((resolve,reject)=>{
          appPrimary.auth().createUserWithEmailAndPassword(email, password)
          .then(ResultUser => {
            resolve(ResultUser);
            appPrimary.delete();
          }).catch(error => {
            alert(error)
            appPrimary.delete();
          });
          });
          getPromise.then(ResultUser=>{
            console.log(ResultUser);
          })
      }
      catch(error){
        alert(error)
      }
}

export const  SigninByEmaiPass=async (emailAddress,password) => {
    try{
      var appPrimary= firebase.initializeApp(configData, "primary");
      var getPromise = new Promise((resolve,reject)=>{
      appPrimary.auth().signInWithEmailAndPassword(emailAddress, password)
      .then(ResultUser => {
        resolve(ResultUser);
        appPrimary.delete();
      }).catch(error => {
        alert(error)
        appPrimary.delete();
      });
      });
      return getPromise;
      }
      catch(error){
        alert(error);
        return null;
      }
}
export const  SigninOut= (email,password) => {
    try{
          var appPrimary= firebase.initializeApp(configData, "primary");
          appPrimary.auth().signOut(email, password);
          appPrimary.delete();
      }
      catch(error){
        alert(error)
      }
}
