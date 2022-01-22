
import React from "react";
import './formInput.scss'

const Input = ({handler ,label, ...others})=>(
    <div className="group">
       <input className="form-input" onChange={handler}  {...others} />
       {
           label ? (<label className={`${others.value.length ? 'shrink':''} form-input-label`} >
               {label}
           </label>):null
       }
    </div>
)
export default Input;