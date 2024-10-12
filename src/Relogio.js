import React from 'react';
import ReactDOM from 'react-dom/client';

function Relogio() {
    return (
      <>
      <h1>Meu Relogio</h1>
      <div id="relogio"></div>
      </>
    );
  }
function tempo(){
    let t =  new Date().toLocaleTimeString(); 
    document.getElementById('relogio').innerHTML = t;
    setTimeout(tempo,1000);
}
window.addEventListener('load', () => tempo())

export default Relogio;