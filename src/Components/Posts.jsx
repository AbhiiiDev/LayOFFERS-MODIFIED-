import React from 'react'
import "./Post.css";
import {Avatar} from "@mui/material"
import InputOptions from './InputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

export default function Posts({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar/>
            <div className="post_info">
                <h2>Abhishek Verma</h2>
                <p>yo RECESSION IS KILLING</p>
            </div>
        </div>
        <div className="post_body">
            <p>THIS IS THE POST TEMPLATE</p>
        </div>
        <div className="post_buttons">
          <InputOptions  Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
          <InputOptions  Icon={CommentIcon} title="Comment" color="gray"/>
          <InputOptions  Icon={ShareIcon} title="Share" color="gray"/>
          <InputOptions  Icon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
}
