import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})


const api_key = 'd478833362c5778e8400557531be728d';
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicardor de búsqueda de datos
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            result => (result.json()).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);

                    //modificar el state con el resultado del fetch
                    dispatch(setForecastData({city: payload, forecastData}))
                }
            )
        )
    }
};