
import React from "react";
import './collection.scss'
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectShopItems } from "../Reducer/shop/shopSelector";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collectionItem/collectionItem";
import { useState ,useEffect} from "react";
import updateCollections from '../Reducer/shop/shopAction';
import {db,convertCollectionSnapshotToMap} from '../../firebase/firebase'

const Collection = ({allCollection, updateCollections})=>{
    // const { updateCollections}
    const {colRouteName} = useParams()
    const [loading,setLoading] = useState(true)
       
    
     useEffect(()=>{
        const collectionRef = db.collection('collection')
        collectionRef.onSnapshot(async snapShot =>{
        const collectionMap =  convertCollectionSnapshotToMap(snapShot)
        updateCollections(collectionMap)
          });
     })
       

        const [collection] = allCollection.filter(col=>col.routeName===colRouteName)
        console.log(collection)
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
      updateCollections : collectionMap=>dispatch(updateCollections(collectionMap))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Collection);