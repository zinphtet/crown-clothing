import React from "react";
import './shoppage.scss'
import data from './shopData.jsx'

import CollectionPreview from "../../components/collectionPreview/collectionPreview";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections : data
        };
    }

    render(){
        return(
            <div className="shop-page">
             { this.state.collections.map (({id,...others})=>{
                 return   <CollectionPreview key={id} {...others}/>
              })}
            </div>
        )
    }
}

export default ShopPage;