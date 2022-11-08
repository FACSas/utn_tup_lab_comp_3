import { useContext } from "react";
import Contexto from "./practica_5/Contexto";

export default function Menu () {

    const {selected, selectedHandle} = useContext(Contexto);

    return (
        <>
            <h1>TUP - UTN - Laboratorio de computación 3 - Práctica</h1>
                <select onChange={selectedHandle}>
                    <option value="1">Práctica 1</option>
                    <option value="2">Práctica 2</option>
                    <option value="3">Práctica 3</option>
                    <option value="4">Práctica 4</option>
                </select>
        </>
    );
}