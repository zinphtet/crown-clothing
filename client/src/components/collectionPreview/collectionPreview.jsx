
import React from "react";
import './collectionPreview.scss'
import CollectionItem from "../collectionItem/collectionItem";
import { useNavigate } from "react-router-dom";

const CollectionPreview = ({title ,routeName,items})=>{
  const navigate = useNavigate()
    return(
    <div className="collection-preview">
        <h1 className="title" onClick={()=>navigate(`/shop/${routeName}`)}>{title}</h1>
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
)}

export default CollectionPreview;