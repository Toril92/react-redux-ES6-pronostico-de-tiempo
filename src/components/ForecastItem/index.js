import React from "react";
import PropTypes from "prop-types";
import WeatherData from "../WeatherLocation/WeatherData/index";


const ForecastItem = ({weekDay, hour, dataWeatherData}) => (
    <div>
        <h2>{weekDay} Hora:{hour}</h2>
        <WeatherData data={dataWeatherData}/>
    </div>
);


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    dataWeatherData: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default ForecastItem;