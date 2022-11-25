import React from 'react'
import "./widgets.css";
import InfoIcon from '@mui/icons-material/Info';


export default function Widgets() {
    const newsArticle = (heading)=>{
        <div className="widget_articles">
            <div className="widget_articleLeft"></div>
            <div className="widget_articleRight">
                <h2>{heading}</h2>
                {/* <p>{subtitle}</p> */}
            </div>
        </div>
    };
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("test")}
    </div>
    
    
  );
  
}
