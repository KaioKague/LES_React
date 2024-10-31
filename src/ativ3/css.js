import React from "react";



function Todo3(){
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }
    return(
    <div style={person.theme}>
        <h1>{person.name}'s to do List</h1>
        <ul>
            <li>Melhorar o videofone</li>
            <li>Preparar lições de aeronautica</li>
            <li>Trabalhar no motor a alcool</li>
        </ul>
    </div>
    );
}

export default Todo3;