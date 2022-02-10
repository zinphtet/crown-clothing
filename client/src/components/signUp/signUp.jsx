
import React from "react";
import CustomButton from "../customButton/customButton";
import Input from "../formInput/formInput"; 
import './signUp.scss'
import {signUpStart} from '../Reducer/user/userAction'
import {connect} from 'react-redux'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            displayName :'',
            email: '',
            password : '',
            confirmPassword : ''
        }
    }
    handleSubmit = async event=>{
          event.preventDefault();
          const {signUpStart} = this.props
          const {displayName,email,password,confirmPassword} = this.state;
         
          if(password !== confirmPassword) {
              alert("Password don't match !!");
              return; 
          }
          signUpStart({displayName,email,password})

    }

    handleChange = event =>{
        const {name,value} = event.target;
        
        this.setState({[name] : value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I don't have an account </h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                <Input
                   className='hidden'
                   />
                   <Input
                   type ='text'
                   name ='displayName'
                   value ={displayName}
                   onChange = {this.handleChange}
                   label='displayName'
                   required
                   />

                 <Input
                   type ='emial'
                   name ='email'
                   value ={email}
                   onChange = {this.handleChange}
                   label='Email'
                   required
                   />

                  <Input
                   type ='password'
                   name ='password'
                   value ={password}
                   onChange = {this.handleChange}
                   label='Password'
                   required
                   />

                <Input               
                   type ='password'
                   name ='confirmPassword'
                   value ={confirmPassword}
                   onChange = {this.handleChange}
                   label='Confirm Password'
                   required
                   />
                   <CustomButton type='submit'>Sig Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        signUpStart:(userCredentials) => dispatch(signUpStart(userCredentials))
    }
}

export default connect(null,mapDispatchToProps)(SignUp);