import React from "react";
import { Link } from "react-router-dom";
import Botao from './2-1';
import Relogio from "../Relogio";
import Formulario from "./2-4";

function Pag1_2(){
    return(
        <div>
            <Botao/><br/>
            <Relogio/><br></br>
            <Formulario/> <br/>
            <Link to="../ativ4">Voltar</Link>
        </div>
    );
}

export default Pag1_2;