
import React from "react";
import './header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cartDropdown/CartDropdown";
import { selectUserState } from "../Reducer/user/userSelector";
import { createStructuredSelector } from "reselect";

const Header =({ userNow})=>{
 
  return(
  
    <div className="header">
        <Link className="logo-container" to='/'>
             <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
              Shop
            </Link>
            <Link className="option" to='/contact'>
              Contact
            </Link>
            {
           userNow ? 
              (<div className="option" onClick={()=>auth.signOut()}>Sign Out</div>)
              :
              (<Link className="option" to='/account'>Sign In</Link>)
            }
             <CartIcon/>
        </div>
       <CartDropdown/>
    </div>
)
}


const mapStaeToProps = createStructuredSelector({
    userNow : selectUserState,
  });  

export default connect(mapStaeToProps)(Header);