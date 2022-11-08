import React from 'react'
import { useContext } from 'react'
import Practica1 from './practica_1/Practica1'
import Practica2 from './practica_2/Practica2'
import Practica3 from './practica_3/Practica3'
import Practica4 from './practica_4/Practica4'
import Contexto from './practica_5/Contexto'

export default function MainContent () {

    const {selected, selectedHandle} = useContext(Contexto);

    return (
        <main>
            { selected === '1' && <Practica1 /> }
            { selected === '2' && <Practica2 /> }
            { selected === '3' && <Practica3 /> }
            { selected === '4' && <Practica4 /> }
        </main>
    );
}