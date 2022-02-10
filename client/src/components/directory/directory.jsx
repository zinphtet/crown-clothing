
import React from "react";
import './directory.scss'

import MenuItem from "../menuItem/menuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySessions } from "../Reducer/Directory/directorySelector";
const Directory = ({ sections})=>{
        return (
            <div className="directory-menu">
                  {
                   sections.map(({id ,...others})=>(    
                           <MenuItem  key={id} {...others} />            
                      ))
                  }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySessions,
})

export default connect(mapStateToProps)(Directory);