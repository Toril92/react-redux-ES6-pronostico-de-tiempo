import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem/index";
import "./styles.css";

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            dataWeatherData={forecast.data}
        />
    ));
};

const renderProgress = () => {
    return <h3>"Cargando pronóstico extendido"</h3>
};

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className="forecastTitle">Pronóstico Extendido para {city}</h2>
        {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.string.isRequired,
};

export default ForecastExtended;