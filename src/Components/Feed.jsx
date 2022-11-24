import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
function Feed() {
    const [Input, setInput] = useState('');
    const [posts,setposts]=useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot((snapshot)=>
            setposts(
                snapshot.docs.map((doc)=>({
                    id: doc.id,
                    data:doc.data(),
                }))
                )
        );
    },[]);
    const sendPost =(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:'Divyanshu Varshney',
            description:'This is for test plz work',
            message : Input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };
    
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={Input} onChange={e=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Post</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title="photo" color="#70B5F9"/>
                <InputOptions Icon={SubscriptionsIcon} title="VIDEO" color="#E7AE33"/>
                <InputOptions Icon={EventNoteIcon} title="event" color="#C0CBCD"/>
                <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>
        </div >
        {posts.map(({id,data:{name,description,message,photoUrl}}) =>(
            <Posts 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
        ))}
    </div>
  )
}

export default Feed