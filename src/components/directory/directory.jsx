
import React from "react";
import './directory.scss'

import MenuItem from "../menuItem/menuItem";
import {NavLink} from 'react-router-dom'

class Directory extends React.Component{
    constructor(){
        super()

        this.state = {
            sections : [
                {
                    id:1,
                    title : 'hats',
                    imgUrl : 'https://images.pexels.com/photos/185765/pexels-photo-185765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    linkUrl :'hats'
                },
                {
                    id:2,
                    title : 'jackets',
                    imgUrl : 'https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    linkUrl :'jackets'
                },
                {
                    id:3,
                    title : 'sneakers',
                    imgUrl : 'https://images.pexels.com/photos/6776564/pexels-photo-6776564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    linkUrl :'sneakers'
                }
                ,{
                    id:4,
                    title : 'womens',
                    imgUrl : 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size:'large',
                    linkUrl :'womens'
                },
                {
                    id:5,
                    title : 'mens',
                    imgUrl : 'https://images.pexels.com/photos/1194412/pexels-photo-1194412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size:'large',
                    linkUrl :'mens'
                }
            ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                  {
                    this.state.sections.map(({id ,...others})=>(
                        
                           <MenuItem  key={id} {...others} />
                    
                      
                      ))
                  }
            </div>
        )
    }
}

export default Directory;