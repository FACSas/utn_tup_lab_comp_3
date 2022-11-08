import { createContext, useState } from "react";

const Contexto = createContext();

const MenuProvider = ({ children }) => {
    const [selected, setselected] = useState('1');

    const selectedHandle = (e) => {
        setselected(e.target.value)
    }

    const data = {selected, selectedHandle}
  return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
};

export { MenuProvider };
export default Contexto;