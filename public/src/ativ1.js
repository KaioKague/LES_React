import React from 'react';
import { Link } from "react-router-dom";
import Letreiro from './Letreiro.js';
import Relogio from './Relogio.js';

function Ativ1() {
    return (
      <>
      <Letreiro/>
      <Relogio/>
      <Link to="/">Voltar</Link>
      </>
    );
}

export default Ativ1;