import React from "react";
import './signIn.scss'
import Input from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
 import {auth, signInWithGoogle} from '../../firebase/firebase'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password : '',
            email: ''
        }
    }
 handleChange = (e)=>{
     const {name,value} = e.target;
     this.setState({[name]:value})
 }
 handleSubmit =async event=>{
     event.preventDefault();
    const {email,password} = this.state
   try{
       await auth.signInWithEmailAndPassword(email,password)
       this.setState({email:'' , password:''})

   }catch(err){
       console.log(err.message)
   }
 }
    render(){
        return(
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input name='email' type='email' value={this.state.email} handler={this.handleChange} required label='email'/>
                    <Input name='password' type='password' value={this.state.password} onChange={this.handleChange} required label='password'/>
                    <div className="btns">
                    <CustomButton type='submit'>Sign in</CustomButton>
                   <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>
                  
                </form>
            </div>
        )
    }
}
export default SignIn;