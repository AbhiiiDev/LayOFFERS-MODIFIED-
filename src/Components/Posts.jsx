import React from 'react'
import "./Post.css";
import {Avatar} from "@mui/material"

export default function Posts({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar/>
            <div className="post_info">
                <h2>Divyanshu Varshney</h2>
                <p>Description</p>
            </div>
        </div>
        <div className="post_body">
            <p>Message Goes Here</p>
        </div>
    </div>
  )
}
