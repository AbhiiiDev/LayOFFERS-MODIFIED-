import { Avatar } from "@mui/material";
import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    const recentItem  = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1562664377-709f2c337eb2? ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Divyanshu Varshney</h2>
                <h4>varshneydivanshu23@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                    <h5>EX EMPLOYEE</h5>
                <div className="sidebar_stat">
                    <p>SDE @META</p>
                    <p className="sidebar_statNumber">2 YEARS</p>
                </div>
                <div className="sidebar_stat">
                    <p>SWA @ALPHABET</p>
                    <p className="sidebar_statNumber">3 YEARS</p>

                </div>

            </div>
            <div className="sidebar_bottom">
              <p> SKILLS</p> 
              {recentItem('REACT JS')}
              {recentItem('C ++ programming')}
              {recentItem('WEB DEVELOPMENT')}
              {recentItem('MERN STACK')}

            </div>

        </div>
    )
}
