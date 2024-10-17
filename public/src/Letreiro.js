import React from 'react';

var contador = 0;
function Letreiro() {
    return (
      <>
      <h1>Meu Letreiro</h1>
      <script>
        setInterval(tick, 200);
      </script>
      </>
      
    );
  }
function tick(){
    const letra = "Venha estudar na FATEC!!!";
    const id = document.getElementById('root')
    if (contador <= letra.length){
        id.append(letra.charAt(contador))
        contador ++;
    }
}

setInterval(tick, 200);

export default Letreiro;
  