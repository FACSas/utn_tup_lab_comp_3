import React from 'react';
import {useState } from 'react'
import {createContext} from 'react'

const Contexto = createContext();

export const MenuProvider = ({ children }) => {

    const [selected, setselected] = useState('1');

    const selectedHandle = (e) => {
        setselected(e.target.value)
    }

    const data = {selected, selectedHandle}

  return (
    <Contexto.Provider value={data} >{children}</Contexto.Provider>
  )
};

export default { Contexto };