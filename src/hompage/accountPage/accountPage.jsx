import React from "react";
import './accountPage.scss'

import SignUp from "../../components/signUp/signUp";
import SignIn from "../../components/signIn/signIn";
const AccountPage = ()=>(
    <div className="account-page">
           <SignIn />
           <SignUp/>
    </div>
)

export default AccountPage;