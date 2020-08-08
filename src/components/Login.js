import React,{useState} from 'react';
import './Login.css';
import {Link , useHistory} from 'react-router-dom';
import {auth} from './Firebase';

function Login() {
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const login =(event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth)=>{
      history.push("/");
    })
    .catch((e)=>alert(e.message));

  };

  const register =(event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      history.push("/");
    })
    .catch((e)=>alert(e.message));
  };


    return (
        <div className="login">
         <Link to="/">
         <img className="login-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="login_image"/>
         </Link>
            
         <div className="login-container">
           <form className="login-div">
                <h1 className="login-h1">Login</h1>
                <h5 className="login-h5">Email or mobile phone number</h5>
                  <input type="email" name="email" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                <h5 className="login-h5" for="password">Password</h5>
                <input type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}></input>
                <button onClick={login}  type="submit" className="login-btn">Login</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
            <button onClick={register} className="signup-btn">Create your Amazon account</button>
         </div>


        </div>
    )
}

export default Login;
