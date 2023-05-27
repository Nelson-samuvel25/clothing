import React,{Component} from "react";

import ShopData from "./ShopData";

import CollectionPreview from "../../components/collections/CollectionPreview";


class Shop extends Component{
    constructor(){
        super();
        this.state = {
            collections : ShopData,
        }
    }


    render() {

        const {collections} = this.state;

        return(
            <div className="shop-page">
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
}


export default Shop;