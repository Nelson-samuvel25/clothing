import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectShopOverview } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../collections/CollectionPreview";

import './CollectionOverview.scss';



const CollectionOverview = ({collections})=>{

    return(
        <div className="collections-overview">
         {
        collections.map(({id,...otherCollections})=>{
            return(
                <CollectionPreview key={id} {...otherCollections}/>
            )
        })
    }
        </div>
   
    )
}


const mapStateToProps = createStructuredSelector({
    collections : selectShopOverview,
})

export default connect(mapStateToProps)(CollectionOverview);