import React, { useEffect } from "react";
import { Relogio } from "./2-3-tempo";
import { useState, useEffect } from "react";

function useTempo(){
    const [tempo, setTempo] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return tempo;
}

export default function Tempo(){
    const time = useTempo();
    return (
        <Relogio tempo={time.toLocaleDateString()}/>
    );
}