import React from 'react'
import './Loginnew.css'
import {useState} from 'react'
import {auth} from './firebase';
import { login } from '../features/userSlice';
import {useDispatch} from 'react-redux'
 export default function Loginnew() {
     const [email, setemail] = useState('');
     const [password, setpassword] = useState('');
     const [name, setname] = useState('');
     const [profilePic, setProfiePic] = useState('');
     const dispatch=useDispatch(); 

    const loginToApp=(e)=>{
e.preventDefault();
    }
    const register= () =>{

        if(!name){
return alert("please enter a full name!");  }
       
auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            }).then(()=>{
                dispatch(
                    login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:name, 
                photoUrl:profilePic
                 })
            );

            });
        }).catch((error)=>alert(error))   
    };
  return (
    <div className='login'>
<img src="" alt="" />  

<form>
    <input value={name}  onChange={(e)=>setname(e.target.value)} placeholder='full name(required if registering' type="text" />
    
    <input value={profilePic} onChange={(e)=>setProfiePic(e.target.value)  }placeholder='profile pic url(optional)' type="text" />

    <input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' type="email" />
    
    <input value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Password' type="password" />
    
    <button type='submit' onClick={loginToApp}>Sign In</button>
</form>
<p>Not a member?
    <span className='login_register' onClick={register}>Register Now</span>
</p>
</div>
)
}


