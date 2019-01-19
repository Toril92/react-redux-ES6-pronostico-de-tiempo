import React from 'react';
import WeatherLocation from './WeatherLocation/index.js';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ( {cities, onSelectedLocation} ) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const citiesToComponent = cities => (
        cities.map( city => 
            (
                <WeatherLocation
                    key = {city}
                    city = {city}
                    onWeatherLocationClick = { () => handleWeatherLocationClick(city)}
                    />
                )
        )
    );
    
    return(
    <div className="locationList">
        {citiesToComponent(cities)}
    </div>
    );
    
};

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func.isRequired,
};

export default LocationList;