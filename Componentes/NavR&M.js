import React from "react";
export default function NavBar ({titulo}){
    return(
        <nav className="nav">
            <div>
                <h1 id='tituloR'>{titulo}</h1>
            </div>
        </nav>
    )
}