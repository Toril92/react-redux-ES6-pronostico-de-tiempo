import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = 'd478833362c5778e8400557531be728d';
const url = "http://api.openweathermap.org/data/2.5/weather";



class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            data: null,
            city
        };
    }

    handleUpdateClick = () => {
        const city = this.state.city;
        const api_weather = `${url}?q=${city}&APPID=${api_key}`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data: data });
        });
    }

    componentWillMount() {
        this.handleUpdateClick();
    }

    render = () => {
        const {onWeatherLocationClick} =  this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                { data ? <WeatherData data={data} /> :
                <CircularProgress size={60} thickness={7} />
                }
            </div>
        )
    };
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;