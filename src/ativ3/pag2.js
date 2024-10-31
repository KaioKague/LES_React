import React from "react";
import { Link } from "react-router-dom";
import PackList from "./Pack";


function Pag2(){
    return(
        <>
            <PackList/><br/>
            <Link to="../ativ3">Voltar</Link>
        </>
    );
}

export default Pag2;