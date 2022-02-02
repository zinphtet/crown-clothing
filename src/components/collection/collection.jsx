
import React from "react";
import './collection.scss'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectShopItems } from "../Reducer/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collectionItem/collectionItem";

const Collection = ({allCollection})=>{
    const {colRouteName} = useParams()
    const [collection] = allCollection.filter(col=>col.routeName===colRouteName)
    
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
               {
                collection.items.map((item,idx) =><CollectionItem key={idx} item={item}/>)
               }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    allCollection: selectShopItems
})


export default connect(mapStateToProps)(Collection);