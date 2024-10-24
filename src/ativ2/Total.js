import React from 'react';

export default function Total({number}){
    return (
        <>
            <h2 id='total'>Total</h2>
            <div id='tt' className='numero'>{number}</div>
        </>
    );
}