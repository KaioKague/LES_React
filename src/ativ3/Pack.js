import React from "react";

function Item({name , isPacked}){
    let itemCont = name
    if (isPacked) {
        itemCont = ( <del>{ name + " ✔"} </del>);
    }
    return <li className="item">{itemCont}</li>;
}

export default function PackList(){
    return(
        <div>
            <section>
                <h1>Sally Ride Pack</h1>
                <ul>
                    <Item isPacked={true} name="Capacete com folha dourada"/>                
                    <Item isPacked={true} name="Traje de Astronauta"/>
                    <Item isPacked={false} name="Foto de Tam"/>
                </ul>
            </section>
        </div>
    );
}