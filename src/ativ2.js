import React from 'react';
import { Link } from "react-router-dom";
import './ativ2/css.css';
import Cont from './ativ2/Contador';
import Total from './ativ2/Total';

function Ativ2(){
    return (
        <div>
            <div id="corpo">
                <div className='contador' id='total'>
                    <Total/>
                </div>
                <div className='contadores'>
                    <div className='contador' id='man'>
                    <img className='image' src='./icon/homem.png' alt="Homem"></img>
                    <Cont/>
                    </div>
                    <div className='contador' id='woman'>
                    <img className='image' src='./icon/mulher.png' alt="Mulher"></img>
                    <Cont/>
                    </div>
                </div>
            </div>
            <Link to="/">Voltar</Link>
        </div>
    );
}

export default Ativ2;