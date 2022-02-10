import React from "react";
import './signIn.scss'
import Input from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
 import {googleSignInStart,emailSignInStart} from '../Reducer/user/userAction'
 import {connect} from 'react-redux'

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
     const {emailSignInStart} = this.props;
    const {email,password} = this.state

    emailSignInStart(email,password)
 }
    render(){
        const {googleSignInStart} = this.props
        return(
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input name='email' type='email' value={this.state.email} handler={this.handleChange} required label='email'/>
                    <Input name='password' type='password' value={this.state.password} onChange={this.handleChange} required label='password'/>
                    <div className="btns">
                    <CustomButton type='submit'>Sign in</CustomButton>
                   <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email,password) =>dispatch(emailSignInStart({email,password}))
    }
}
export default connect(null,mapDispatchToProps)( SignIn);