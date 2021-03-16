
import { useContext, useState } from 'react';
import './login.css'
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { handleGoogleSignIn, handleSignOut, InitializeLoginFrameWork } from './Firebasemanegar';

// // firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   }

function Login() {
  const [newUser,setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: false,
    name:'',
    password:'',
    email: '',
  })

  InitializeLoginFrameWork();
const [loggedInUser, setLoggedInUser] = useContext(UserContext)
const history = useHistory();
const location = useLocation();

let { from } = location.state || { from: { pathname: "/" } };


  const googleSignIn = () =>{
    handleGoogleSignIn()
    .then (res =>{
      setUser(res);
    setLoggedInUser(res);
    history.replace(from);
    })
  } 

  const signOut = () =>{
    handleSignOut()
    .then (res =>{
      setUser(res);
    setLoggedInUser(res);
    })
  }
  
  const handleBlur =(e)=>{
    console.log(e.target.value)
    let isFormValid;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
       
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFormValid = isPasswordValid && passwordHasNumber
    }
    if(isFormValid){
      const newUserInfo = {...user}
      newUserInfo[e.target.name] = e.target.value
      setUser(newUserInfo)
    }
  }
  const submitHandler = (e) => {
    if(newUser && user.email && user.password){
      
      
    }
    if(!newUser && user.email && user.password){
      
    }

    e.preventDefault();
  }

 
  return (
    <div className="login">
      { user.isSignedIn ? <button onClick={signOut}>sign out</button>
        : <button onClick={googleSignIn}>sign in</button>
      }
      <button>Log in With Facebook</button>
      {
        user.isSignedIn && <p> well come, {user.name} <br></br> Email: {user.email}</p>
      }
      <h3>Our won aouthentivation</h3><br></br>
      <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser"> user registration</label>
      <form onSubmit={submitHandler}>
        {newUser && <input type="text" name="name" placeholder="enter your Name" onBlur={handleBlur} required />}<br></br>
        <input type="text" name="email" placeholder="enter your email" onBlur={handleBlur} required /><br></br>
        <input type="password" name="password" placeholder="enter your password" onBlur={handleBlur} id="" required /><br></br>
        <input type="submit" value={newUser ?'sign Up' : 'sign in'} className="type"/>
      </form>
      <p style={{color:"red"}}>{user.error}</p>
      {user.success && <p style={{color:"green"}}>User {newUser ? 'Created' : 'Logged in'} Success Full</p>}
    </div>
  );
}

export default Login;
