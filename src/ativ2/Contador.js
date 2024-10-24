import React from 'react';
import { useState } from 'react';

export function Cont(name){
    var [count, setCount] = useState(0);
    if (name === "click"){
        setCount(count += 1);
        return count;
    }
    else if(name === "unclick"){
        if (count > 0)
            setCount(count -= 1);
        return count;
    }
    else{
        return count;
    }
}

export default function Contador(){
    return (
        <>
        <div className='botoes'>
        <button onClick={Cont('click')} className='contador' ><img className='imgbotao' src='./icon/mais.png' alt='Skill Issue'/></button>
        <button onClick={Cont('unclick')} className='contador'><img className='imgbotao' src={'./icon/menos.png'} alt='Skill Issue'/></button>
        </div>
        <div className='numero'>
            { Cont('count') }
        </div>
        </>
    );
}