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
        <div className="news_item">
            today: Meta deciding to fire 11,000 more employee soon.
        </div>
        <div className="news_item">
            24/11/2022 : Alphabet fired 10,000 employee almost 6% of their crowd.
        </div>
        <div className="news_item">
            today: Meta deciding to fire 11,000 more employee soon.
        </div>
        {newsArticle("test")}
    </div>
    
    
  );
  
}
