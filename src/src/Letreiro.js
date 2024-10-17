import React from 'react';

var contador = 0;
function Letreiro() {
    return (
      <>
      <h1>Meu Letreiro</h1>
      <div id="cont"></div>
      </>
      
    );
  }
function tick(){
    const letra = "Venha estudar na FATEC!!!";
    const id = document.getElementById('cont')
    if (id != null){
    if (contador <= letra.length){
        id.append(letra.charAt(contador))
        contador ++;
    }}
}
window.addEventListener('load', () => setInterval(tick, 200));

export default Letreiro;
  