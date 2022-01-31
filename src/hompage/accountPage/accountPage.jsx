import React from "react";
import './accountPage.scss'
import SignUp from "../../components/signUp/signUp";
import SignIn from "../../components/signIn/signIn";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AccountPage = ()=>{
     
    const user = useSelector(state=> state.user.currentUser)

    if(user){
      return <Navigate to='/' replace  />
    }
    return   <div className="account-page">
                <SignIn />
                <SignUp/>
            </div>
}
  



export default AccountPage;


// const AccountPage = ()=>(
//     <div className="account-page">
//            <SignIn />
//            <SignUp/>
//     </div>
// )