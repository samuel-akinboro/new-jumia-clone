import React, {useState} from 'react'
import './Login.css'
import { auth } from '../Firebase';
import {useHistory} from 'react-router-dom'



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();

      auth.signInWithEmailAndPassword(email, password)
        .then(auth => history.push('/'))
      .catch(error => alert(error.message))
    }

    const register = (e) => {
      e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
            //   Creates a new user
              if (auth) {
                history.push('/')
              }
          })
          .catch(error => alert(error.message));
    };

  return (
    <div className="login-container">
        <div className="container">
            <p>Jumia Store</p>
            <form>
                <h2>Log in</h2>
                  <input type="text" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={signIn}>Log In</button>
                <p>Forgotten account?</p>
                <button className="green" onClick={register}>Create new account</button>
            </form>
        </div>
    </div>
  )
}

export default Login
