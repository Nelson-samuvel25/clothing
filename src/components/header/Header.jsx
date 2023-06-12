import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Header.scss';

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";

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
                    <Link className="option" to='/authentication'>Sign In</Link>                   
                }
                <CartIcon/>
            </div>
        </div>
    )
}

const mapsToProps = state=>({
    currentUser: state.user.currentUser,
})
    
export default connect(mapsToProps)(Header);