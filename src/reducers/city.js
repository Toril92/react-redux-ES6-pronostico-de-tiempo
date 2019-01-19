import {SET_CITY} from './../actions';

//Asignamos el state por defecto a vacio por si viniese a nulo.
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return {...state, city: action.payload};
        default:
            return state;
    }
};
