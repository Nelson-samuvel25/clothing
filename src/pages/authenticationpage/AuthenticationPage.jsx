import React from "react";

import "./AuthenticationPage.scss";

import SignIn from "../../components/siginin/SignIn";

import SignUp from "../../components/sign-up/SignUp";

const AuthenticationPage = ()=>{
    return(
        <div className="authentication">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default AuthenticationPage;