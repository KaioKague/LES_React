import React from 'react';
import { Link } from "react-router-dom";
import './ativ2/css.css';
import Cont from './ativ2/Contador';

function Ativ2(){
    return (
        <div>
        <Cont/>
        <Link to="/">Voltar</Link>
    </div>
    );
}

export default Ativ2;