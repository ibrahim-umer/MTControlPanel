

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
const  SigninByFacebook = () => {
    try{
          var appPrimary= firebase.initializeApp(configData, "primary");
          var provider =new firebase.auth.FacebookAuthProvider();
          provider.setCustomParameters({
            'display': 'popup'
          });
          appPrimary.auth().signInWithPopup(provider)
          .then(function(result) {
            alert("Welcome " + result.user.displayName)
            appPrimary.delete();
          }).catch(function(error) {
            alert(error.message);
            appPrimary.delete();
          });
      }
      catch(error){
        alert(error)
      }
}
export default SigninByFacebook; 