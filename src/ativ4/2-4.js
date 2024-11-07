import React from "react";
import { useState } from "react";

export default function Formulario(){
    const [to, setTo] = useState('Alice');
    const [mesg, setMesg] = useState('Ola');

    function Submit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`Você disse ${mesg} para ${to}`);
        }, 5000);
    }
    return (
        <>
            <form onSubmit={Submit}>
                <label>
                    To: {' '}
                    <select value={to} onChange={e => setTo(e.target.value)}>
                        <option value='Alice'>Alice</option>
                        <option value='Bob'>Bob</option>
                    </select>
                    <br/>
                </label>
                <br/>
                <textarea placeholder="Mensagem" value={mesg} onChange={e => setMesg(e.target.value)}/>
                <br/>
                <button type="submit">Send</button>
            </form>
        </>
    );
}