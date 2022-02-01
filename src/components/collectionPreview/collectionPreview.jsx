
import React from "react";
import './collectionPreview.scss'
import CollectionItem from "../collectionItem/collectionItem";

const CollectionPreview = ({title ,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
          <div className="preview">
             {
               items.filter((_,idx)=>idx <4).map((item) =>{
                     return (
                         <CollectionItem key={item.id} item={item}/>
                     )
                    
                } )
             }
          </div>
       
    </div>
)

export default CollectionPreview;