import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from "prop-types";
import './styles.css';
const WeatherData = ({ data }) => {
    const { temperature, weatherstate, humidity, wind } = data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature
            temperature = {temperature}
            weatherstate = {weatherstate}
        />
        <WeatherExtraInfo 
            humidity={humidity}
            wind={wind}    
        />
    </div>
    )
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;