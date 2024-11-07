import React from "react";
import { useState } from "react";
import { sculptureList } from "./2-2-data";

export default function Esculturas(){
    const [index, setIndex] = useState(0);
    const [showMore, setShow] = useState(false);

    function NextClick(){
        setIndex(index+1);
    }
    function MoreClick(){
        setShow(!showMore);
    }

    let escultura = sculptureList[index];
    return (
        <>
        <button onClick={NextClick}>
            Next
        </button>
        <h2>
            <i>{escultura.name}</i> por {escultura.artist}
        </h2>
        <h3>
            ({index+1} de {sculptureList.length})
        </h3>
        <button onClick={MoreClick}>
            {showMore ? 'Hide' : 'Show'} Detalhes
        </button><br></br>
        {showMore && <p>{escultura.description}</p>}
        <img src={escultura.url} alt={escultura.alt}/>
        </>
    );
}