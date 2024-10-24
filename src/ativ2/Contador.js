import React from 'react';
import { useState } from 'react';

function Contador(){
    function Cont(state){
    const [count, setCount] = useState(0);
    if (state === "click"){
        setCount(count => count + 1);
    }
    else if(state === "unclick"){
        if (count > 0)
            setCount(count => count - 1);
    }
    else{
        return count;
    }}
    return(
    <>
    <div className='botoes'>
    <button onClick={Cont} className='contador' value='click'><img className='imgbotao' src='./icon/mais.png' alt='Skill Issue'/></button>
    <button onClick={Cont} className='contador' value='unclick'><img className='imgbotao' src={'./icon/menos.png'} alt='Skill Issue'/></button>
    </div>
    <div className='numero'>
        <p>0</p>
    </div>
    </>
    );
}

window.addEventListener('load',() => Contador());
export default Contador;