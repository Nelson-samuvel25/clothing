import React from "react";
import FormInput from "../formInput/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";
import {auth, userProfileDoc} from "../../firebase/firebase.utils";

import "./SignUp.scss";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
    }


    handleSubmit =  (async(event)=>{
       event.preventDefault();

       const {displayName,email,password,confirmPassword} = this.state;

       if(password !== confirmPassword){
        alert("your password does not matching");
        return;
       }

       const {user} = await auth.createUserWithEmailAndPassword(email, password);

        try{
           await userProfileDoc(user,{displayName});
        
           this.setState({
            displayName : "",
            email : "",
            password : "",
            confirmPassword : ""
           })
        }
        catch(err){
            console.log("error in signing in",err);
        }
    })

    handleChange = (event)=>{
        const {name,value} = event.target;

        this.setState({[name] : value})
    }

    render(){

        const {displayName,email,password,confirmPassword} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Create a new account</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type = "text"
                    name = "displayName"
                    value = {displayName}
                    onChange = {this.handleChange}
                    label="Username"
                    required
                    />

                    <FormInput
                    type = "email"
                    name = "email"
                    onChange = {this.handleChange}
                    value = {email}
                    label="Email"
                    required
                    />


                    <FormInput
                    type = "password"
                    name = "password"
                    onChange = {this.handleChange}
                    value = {password}
                    label="password"
                    required
                    />

                    
                    <FormInput
                    type = "password"
                    name = "confirmPassword"
                    onChange = {this.handleChange}
                    value = {confirmPassword}
                    label="confirmPassword"
                    required
                    />

                    <CustomBtn type="submit">Sign Up</CustomBtn>

                </form>
            </div>
        )
    }
}

export default SignUp;