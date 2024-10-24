import React from 'react';
import { useState } from 'react';
import Total from './Total';

export default function Contador(){
        const [count, setCount] = useState(0);
        function Cont1(){
            setCount(count + 1);
        }
        function Cont2(){
            if(count > 0)
                setCount(count - 1);
        }
    return(
    <>
        <div id="corpo">
            <div className='contador' id='total'>
                <Total number={count}/>
            </div>
            <div className='contadores'>
                <div className='contador' id='man'>
                    <img className='image' src='./icon/homem.png' alt="Homem"></img>
                    <Botao1 func1={Cont1} func2={Cont2}/>
                </div>
                <div className='contador' id='woman'>
                    <img className='image' src='./icon/mulher.png' alt="Mulher"></img>
                    <Botao1 func1={Cont1} func2={Cont2}/>
                </div>
            </div>
        </div>
    </>
    );
}

function Botao1({func1, func2}){
    const [count1, setCount1] = useState(0);
    function Mais(){
        setCount1(count1 + 1);
        func1();
    }
    function Menos(){
        if(count1 > 0){
            setCount1(count1 - 1);
            func2();
        }
    }
    return (
        <><div className='botoes'>
            <button onClick={Mais} className='contador'><img className='imgbotao' src='./icon/mais.png' alt='Skill Issue'/></button>
            <button onClick={Menos} className='contador'><img className='imgbotao' src={'./icon/menos.png'} alt='Skill Issue'/></button>
        </div>
        <div className='numero'>
            <p>{count1}</p>
        </div>
        </>
    );
}