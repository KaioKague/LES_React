import React from "react";

function ToDoList(){
    return(
        <div>
            <h1>Hedy Lamarr's Todos</h1>
            <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo"/> <br/>
            <ul>
                <li>Inventar novos semaforos</li>
                <li>Ensaiar uma cena de filme</li>
                <li>Melhorar a tecnologia de espectros</li>
            </ul>
        </div>
    );
}

export default ToDoList;