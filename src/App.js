import { Provider } from "react-redux";
import { CronosApp } from "./components/CronosApp";
import { store } from "./redux/store/store";

import './styles/main.scss';

export const App = () => (
    <Provider store={ store }>
        <CronosApp/>
    </Provider>
  )

