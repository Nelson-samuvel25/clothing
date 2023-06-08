import React from "react";

import "./AuthenticationPage.scss";

import SignIn from "../../components/siginin/SignIn";

const AuthenticationPage = ()=>{
    return(
        <div className="authentication">
            <SignIn/>
        </div>
    )
}

export default AuthenticationPage;