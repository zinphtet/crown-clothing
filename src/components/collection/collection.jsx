
import React from "react";
import './collection.scss'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectShopItems } from "../Reducer/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collectionItem/collectionItem";
import { fetchStartAsync } from "../Reducer/shop/shopAction";
 import { useEffect} from "react";

const Collection = ({allCollection,fetchStartAsync})=>{
    useEffect(() => {
        // code to run on component mount
        fetchStartAsync()
      }, [])
  
    const {colRouteName} = useParams()
        const [collection] = allCollection.filter(col=>col.routeName===colRouteName)
        if(collection){
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
  return (
      <div className="loading">
          Loaidng ... Please Wait
      </div>
  )
}


const mapStateToProps = createStructuredSelector({
    allCollection: selectShopItems
})

const mapDispatchToProps = dispatch =>{
    return{
        fetchStartAsync : collectionMap=>dispatch(fetchStartAsync(collectionMap))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Collection);