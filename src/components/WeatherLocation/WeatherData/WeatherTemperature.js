import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import { CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE} from './../../../constants/weathers';
const stateToIconName = weatherState =>{
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "sun";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstorm";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-sunny";
    }
}

const getWeatherIcon = weatherstate =>{
        return (
            <WeatherIcons
                className="wicon"
                name={stateToIconName(weatherstate)}
                size="4x"
            />
        )
}

const WeatherTemperature = ({ temperature, weatherstate }) => (
    
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherstate)}
        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperaturetype">Cº</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherstate: PropTypes.string,
};
export default WeatherTemperature;