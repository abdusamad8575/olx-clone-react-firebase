import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context';
import {useHistory} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage] = useState('')

  const {firebase} = useContext(FirebaseContext)

  const history = useHistory()

  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
    }).catch((error)=>{
      // alert(error.message)
      setMessage(error.message)
    })
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value) 
    setMessage('')
  }
  const handleSignup=(e)=>{
    e.preventDefault()
    history.push("/signup")
  }

  return (
    <div>
        <div className='container'><span className='validationMsg'>{message}</span></div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>handleEmail(e)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={handleSignup}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
