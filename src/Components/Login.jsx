import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import "./Login.css";
import { login } from '../features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';



export default function Login() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [url, seturl] = useState("")
  const [Add, setAdd] = useState("container");
  const dispach= useDispatch();
  const signin=()=>{
 

  }
  const signup=()=>{
    console.log("yes");
    setAdd("container sign-up-mode");
  }
  const logintoApp=(e)=>{
    e.preventDefault();
    <>
    <Header/>
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </>
  }
  const register=()=>{
    if(!Name){
      alert("Please enter your name");
      auth.createUserWithEmailAndPassword(Email,Password)
      .then((userAuth)=>{userAuth.user.updateProfile({
        displayName:Name,
        photoURL:url,
      })
      .then(()=>{
        dispach(login({
          email:userAuth.user.email,
          uid : userAuth.user.uid,
          displayName :Name,
          photoURL: url,
        }))
      })
    })
    .catch(error=>alert(error.message));
    }

  }

  return (
    <div className={Add}>
    <div className="forms-container">
      <div className="signin-signup">
        <form action="/" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input value={Email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button type='submit' onClick={logintoApp} className="btn solid">Sign in</button>
          {/* <input type="submit" value="Login" className="btn solid" /> */}
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>


        <form action="/" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" value={Name} onChange={e=>setName(e.target.value)} placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input value={url} onChange={e=>seturl(e.target.value)} type="text" placeholder="Profile Url" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" value={Email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button type='submit' onClick={register} className="btn solid">Sign up</button>
          {/* <input type="submit" className="btn" value="Sign up" /> */}
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
          Don't have an account ? No Problem , SignUp here and Register on LayOFFERS and fight with Recession.
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={signup}>
            Sign up
          </button>
        </div>
        <img src="./images/log.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
Already have an account ? Just SingIn here and explore offers
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={signin}>
            Sign in
          </button>
        </div>
        <img src="./images/register.svg" className="image" alt="" />
      </div>
    </div>
  </div>
  );

}
