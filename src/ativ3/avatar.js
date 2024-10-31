import React from "react";
import Todo3 from "./css";

const today = new Date();

function Data(date){
    return new Intl.DateTimeFormat(
        'pt-BR',
        {weekday: "long"}
    ).format(date);
}

function Avatar(){
    const ava = 'https://i.imgur.com/7vQD0fPs.jpg';
    const descript = 'Gregorio Y. Zara';
    return(
        <>
            <img className="avatar" src={ava} alt={descript} width={100} height={100}/>
        </>
    );
}

function Todo2(){
    const name = 'Gregorio Y. Zara'
    return(
        <>
            <h1>To do list para {Data(today)}</h1>
            <h3>Para: {name}</h3>
            <Avatar/>
            <Todo3/>
        </>
    );
}

export default Todo2;