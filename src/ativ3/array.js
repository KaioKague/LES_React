import React from "react";
import { people } from "./arrayData";


export default function Lista(){
    const listaPeople = people.map(person => 
            <li>
                <p><b>{person.name}</b>
                {' '+ person.profissao+ ' '} conhecido por {person.feito}
                </p>
            </li>
        );
    return <ul>{listaPeople}</ul>;
}