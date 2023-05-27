import React from "react";

import './CollectionPreview.scss';

import CollectionItem from "../collectionItems/CollectionItems";


const CollectionPreview = ({title,items})=>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                    {
                        items
                        .filter((item,idx)=> idx<4)
                        .map(({id,...otherCollectionItems})=>{
                            return(
                                <CollectionItem key={id} {...otherCollectionItems}/>
                            )
                        })
                    }
            </div>

        </div>
    )
}


export default CollectionPreview;