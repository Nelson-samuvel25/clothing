import React from "react";

import './MenuItem.scss';


import { withRouter } from "react-router-dom/cjs/react-router-dom.min";





const MenuItem = ({title,imageUrl,size,history,match,link})=>{

    return(
        <div 
         className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${link}`)}>
        
        <div className="background-image" 
        style={{
            backgroundImage : `url(${imageUrl})`
        }}  
        ></div>
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
    )
}

export default withRouter(MenuItem);