import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './Header.scss';

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";

import CartDropdown from "../cart-dropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";

import { selectCartHidden } from "../../redux/cart/cart-selectors";

const Header = ({currentUser,hidden})=>{
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
            {
                hidden?null: <CartDropdown/>
            }
        </div>
    )
}

const mapsToProps = createStructuredSelector({
   currentUser : selectCurrentUser,
   hidden : selectCartHidden,
})
    
export default connect(mapsToProps)(Header);