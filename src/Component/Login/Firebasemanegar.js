import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firbaseconfig';

export const InitializeLoginFrameWork = () => {
    // firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
         firebase.initializeApp(firebaseConfig);
          }
}


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
      .signInWithPopup(provider)
      .then(res => {
        const { displayName, email } = res.user
        const signInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        }
        return signInUser
      })
      .catch(err => {
        console.log(err);
      })
  }



  export const handleSignOut = () => {
    return firebase.auth().signOut()
      .then(res => {
        const signOutUser = {
          signOut: false,
          name: '',
          email: '',
          error:'',
          success: false
        }
        return signOutUser

      })
      .catch(err => {

      })
  }

//   export const createUserWithEmailAndPassword = () =>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user}
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       updateUserInfo(user.name)
//       setLoggedInUser(newUserInfo);
//       // Signed in 
//       // var user = userCredential.user;
//       // ...
//     })
//     .catch(error => {
//       const newUserInfo = {...user}
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//       // var errorCode = error.code;
//       // var errorMessage = error.message;
//       // console.log(errorCode, errorMessage)
//       // ..
//     });
//   }

//   export const signInWithEmailAndPassword = () =>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = {...user}
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sign in yser info', res.user)
//     })
//     .catch(error => {
//       const newUserInfo = {...user}
//       newUserInfo.error = error.message;
//       newUserInfo.success = false;
//       setUser(newUserInfo);
//     });
//   }

//   const updateUserInfo = name =>{
//     const user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: name,
// }).then(function() {
//   console.log('user name updated successfully')
// }).catch(function(error) {
//   console.log(error)
// });
// }