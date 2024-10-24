import React from 'react';
import {Cont} from './Contador'

function TT(name){
    document.getElementById("tt").innerHTML = Cont(name);
}
TT(" ");
export default function Total(){
    return (
        <>
            <h2 id='total'>Total</h2>
            <div id='tt' className='numero'></div>
        </>
    );
}