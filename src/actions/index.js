import transformForecast from "../services/transformForecast";
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const api_key = 'd478833362c5778e8400557531be728d';
const url = "http://api.openweathermap.org/data/2.5/forecast";
const urlWeather = "http://api.openweathermap.org/data/2.5/weather";


const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});


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

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${urlWeather}?q=${city}&APPID=${api_key}`;
            fetch(api_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }
};