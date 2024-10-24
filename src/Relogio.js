import React from 'react';

function Relogio() {
    return (
      <>
      <h1>Meu Relogio</h1>
      <div id="relogio">
      </div>
      </>
    );
  }
function tempo(){
    let t =  new Date().toLocaleTimeString(); 
    let v = document.getElementById('relogio');
    if (v != null){
      v.innerHTML = t;
    }
    setInterval(tempo, 1000);
}
window.addEventListener('load', () => tempo())

export default Relogio;
