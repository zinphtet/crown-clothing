import React from "react";
import './collectionOverview.scss'
import { selectShopItems } from "../../components/Reducer/shop/shopSelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../collectionPreview/collectionPreview'

const CollectionOverview  = ({ collections})=>{
    return (
        <div className="collection-overview">
        { collections.map (({id,...others})=>{
            return  <CollectionPreview key={id} {...others}/>
         })}
       </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections : selectShopItems
})

export default connect(mapStateToProps)(CollectionOverview );

