import React from 'react'
import "./inputOptions.css";
export default function InputOptions({Icon,title,color}) {
  return (
    <div className='inputOptions'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>

    </div>
  )
}
