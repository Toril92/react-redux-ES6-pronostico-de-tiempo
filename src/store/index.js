import {createStore} from "redux";
import {city} from '../reducers/city';

const initState = {};

/*
* reducer: funcion que devuelve el estado modificado, segun la accion.
* initState: estado inicial de la aplicación
* window..... => sirve para linkar de manera correcta la extensión de chrome de redux*/
export const store = new createStore(city, initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
