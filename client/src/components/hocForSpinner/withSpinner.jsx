
import React from 'react'
const withSpinner = WrappedComponent =>{
     const Spinner = ({isLoading ,...otherProps})=>{
         return isLoading? (
             <div className='loading'>
                 Loading ........... Please Wait
             </div>
         ):( <WrappedComponent/>)
     }
     return Spinner;
}

export default withSpinner;