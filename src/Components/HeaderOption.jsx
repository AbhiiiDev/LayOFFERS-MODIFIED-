import React from 'react'
import "./HeaderOption.css";
import {Avatar} from "@mui/material"

function HeaderOption({avatar,Icon,title}) {
  return (
    <div>
        <div className="headerOption">
            {Icon && <Icon className="HeaderOption_"/>}
            {avatar &&(<Avatar className='headerOption_icon' src={avatar}/>
            )}
            <h3 className='HeaderOption_title'>{title}</h3>

        </div>
    </div>
  )
}

export default HeaderOption