import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import reducers from '../reducers';
// import {city} from "../reducers/city";

const initState = {
    city: "Granada,es"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*
* para utilizar middlewares como el thunk y a la vez utilizar la extension de redux de chrome hay que crear la
* store de la siguiente manera*/

export const store = new createStore(reducers, initState,
    composeEnhancers(applyMiddleware(thunk)));


/*
*La manera de crear la store sin el uso de middlewares y pàra utilizar la extension de chrome de redux.
*
* reducer: función que devuelve el estado modificado, segun la acción.
* initState: estado inicial de la aplicación
* window..... => sirve para linkar de manera correcta la extensión de chrome de redux*/

/*export const store = new createStore(reducers, initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/
