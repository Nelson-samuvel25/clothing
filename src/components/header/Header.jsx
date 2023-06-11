import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Header.scss';

import {ReactComponent as Logo} from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to = "/shop" className="option">
                    Shop
                </Link>
                <Link to = "/contact" className="option">
                    contact
                </Link>
                {
                    currentUser?
                    <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to='/authntication'>Sign In</Link>                   
                }
            </div>
        </div>
    )
}

export default Header;