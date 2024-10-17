import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home";
import ativ1 from "../ativ1"
import ativ2 from "../ativ2";

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home}>Home</Route>
                <Route path="/ativ1" element={ativ1}>Atividade 1</Route>
                <Route path="/ativ2" element={ativ2}>Atividade 2</Route>
            </Routes>
        </BrowserRouter>
    )
}