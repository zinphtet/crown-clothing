import React from "react";
import './signIn.scss'
import Input from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
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
 handleSubmit = ()=>{
     this.setState({email:'' , password:''})
 }
    render(){
        return(
            <div className="sign-in">
                <h2>I have already an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Input name='email' type='email' value={this.state.email} handler={this.handleChange} required label='email'/>
                    {/* <label>Email</label> */}

                    <Input name='password' type='password' value={this.state.password} onChange={this.handleChange} required label='password'/>
                    {/* <label>Password</label> */}

                   <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;