import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li><Link to="/Ativ1">Atividade 1</Link></li>
                    <li><Link to="/Ativ2">Atividade 2</Link></li>
                    <li><Link to="/Ativ3">Atividade 3</Link></li>
                    <li><Link to="/Ativ4">Atividade 4</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;