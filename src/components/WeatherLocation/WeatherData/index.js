import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
const WeatherData = ({ data }) => {
    const { temperature, weatherstate, humidity, wind } = data
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

export default WeatherData;