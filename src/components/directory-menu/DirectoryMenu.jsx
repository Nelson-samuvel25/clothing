import React from "react";

import './DirectoryMenu.scss';

import MenuItem from "../menu-item/MenuItem";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { directorySections } from "../../redux/directory/directory-selectors";



const DirectoryMenu = ({sections})=>{
      

        return(
            <div className="directory-menu ">
                {
                    sections.map(({id,...others})=>{
                        return(
                            <MenuItem key={id} {...others}/>
                        )
                          
                    })
                }
            </div>
        )
}


const mapStateToProps = createStructuredSelector({
    sections : directorySections,
})


export default connect(mapStateToProps)(DirectoryMenu);