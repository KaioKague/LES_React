import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ativ1 from "./ativ1"
import Ativ2 from "./ativ2";
import Ativ3 from "./ativ3";
import Pag1 from "./ativ3/pag1";
import Pag2 from "./ativ3/pag2";

export default function Rotas(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>Home</Route>
                <Route path="/ativ1" element={<Ativ1/>}>Atividade 1</Route>
                <Route path="/ativ2" element={<Ativ2/>}>Atividade 2</Route>
                <Route path="/ativ3" element={<Ativ3/>}>Atividade 3</Route>
                <Route path="/pag1" element={<Pag1/>}>Pagina 1</Route>
                <Route path="/pag2" element={<Pag2/>}>Pagina 1</Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}