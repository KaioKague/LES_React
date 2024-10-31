import React from "react";
import { Link } from "react-router-dom";
import ToDoList from "./list";
import Todo2 from "./avatar";
import Galeria from "./profile";

function Pag1(){
    return(
        <div>
            <h2>Lista</h2>
            <ToDoList/>
            <h2>Avatar</h2>
            <Todo2/>
            <h2>Galeria</h2>
            <Galeria sise={100}/>
            <br/> <br/>
            <Link to="../ativ3">Voltar</Link>
        </div>
    );
}

export default Pag1;