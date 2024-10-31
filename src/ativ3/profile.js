import React from "react";

function Profile({size}){
    return (
        <>
        <img src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson" width={size} height={size}/>
        </>
    );
}

export default function Galeria({sise}){
    return(
        <>
            <h1>Incrivel cientista</h1>
            <Profile size={sise}/>
        </>
    );
}