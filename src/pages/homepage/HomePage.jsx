import React from "react";

import './HomePage.scss';

import DirectoryMenu from "../../components/directory-menu/DirectoryMenu";

const HomePage = ()=>{
    return (
        <div className="homepage">
           <DirectoryMenu/>
        </div>
    )
}

export default HomePage;