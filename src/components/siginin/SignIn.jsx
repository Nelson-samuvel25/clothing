import React from "react";

import "./SignIn.scss";

import FormInput from "../formInput/FormInput";

import CustomBtn from "../custom-btn/CustomBtn";


import { auth,signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : "",
            password : "",
        }
    }

    handleSubmit = async(e)=>{
        e.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword( email, password);
            this.setState({email : "", password : ""});
    
        }
        catch(err){
            console.log("error occured",err);
        }
    }

    handleChange = (e)=>{
        const  {name,value} = e.target;
        this.setState({[name] : value});
        
    }

    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Login with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" />
                
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" />
               
                    <div className="buttons">
                        <CustomBtn type="submit">Sign in</CustomBtn>
                        <CustomBtn 
                        onClick = {signInWithGoogle} isGoogleSignIn
                        >Sign in with google</CustomBtn>
                    </div>

                 
                </form>
            </div>
        )
    }
}

export default SignIn;


