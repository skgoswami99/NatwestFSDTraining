// const Footer = () =>
// {
//     return(
//         <h3>
//             Stackroute &copy; 2022
//         </h3>
//     );
// }

import './Footer.css'
import React from "react";


class Footer extends React.Component
{
    render()
    {
        return(
     
            <div className="footer">
                <h3>
                    Stackroute &copy; 2022
                </h3>
            </div>
        );
    }
}

export default Footer;

// Three main phasesof the component lifecycle
// Initialization   : Initial Rendring : Component started
// Update mounting  : Component is added to DOM
// Unmounting       : Destroying and removing the Component