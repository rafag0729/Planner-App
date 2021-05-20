import { useState } from "react";
import { Provider } from "react-redux";
import { CronosApp } from "./container/CronosApp";
import { store } from "./redux/store/store";
import { ColorContext } from './context/ColorContext';

import './styles/main.scss';

export const App = () => {

    const [color, setColor] = useState([
        { name: "proyecto1", color: "#016a05"}, 
        { name: "proyecto2", color: "#ff1900"},
        { name: "proyecto3", color: "#08467d"}
    ])
    

    return (
    <Provider store={ store }>
        <ColorContext.Provider value={ {color, setColor} }>
            <CronosApp/>
        </ColorContext.Provider>
    </Provider>
  )
}

