import React from 'react'
import "./Post.css";
import { Avatar } from "@mui/material"
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InputOptions from './InputOptions';

export default function Posts({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
      <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
      <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
      <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray"/>
      <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>
      </div>
       
        

  );
}
