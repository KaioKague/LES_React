import React from 'react';
import { Link } from "react-router-dom";
import Letreiro from 'Letreiro.js';
import Relogio from 'Relogio.js';

var contador = 0;

function Ativ1() {
    return (
      <>
      <Letreiro></Letreiro>
      <Relogio></Relogio>
      <Link to="/">Voltar</Link>
      </>
    );
}

  