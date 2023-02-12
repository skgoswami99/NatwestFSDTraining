import React from "react";

import LogoComponent from "./LogoComponent";
import ViewTitle from "./ViewTitleComponent";


class Header extends React.Component{
    render()
    {
    return(
        <div>
        
    <h2>
        I am Header Component!
    </h2>

        <LogoComponent/>
        <ViewTitle/>

    </div>)
    
}    
}

export default Header;