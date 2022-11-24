import React from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" />
                    <button type='submit'>Post</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title="photo" color="#70B5F9"/>
                <InputOptions Icon={SubscriptionsIcon} title="VIDEO" color="#E7AE33"/>
                <InputOptions Icon={EventNoteIcon} title="event" color="#C0CBCD"/>
                <InputOptions Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>
        </div>
        <Posts
        name="Divyanshu Varshney"
        description="Testing it"
        message="Wow it works"
        />

    </div>
  )
}

export default Feed