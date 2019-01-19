import React, {Component} from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem/index";
import transformForecast from "../services/transformForecast";
import "./styles.css";


const api_key = 'd478833362c5778e8400557531be728d';
const url = "http://api.openweathermap.org/data/2.5/forecast";

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

class ForecastExtended extends Component {

    constructor(props) {

        super(props);
        this.state = {forecastData: null}
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity(city) {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            result => (result.json()).then(
                weather_data => {
                    console.log(weather_data);
                    const forecastData = transformForecast(weather_data);
                    console.log(forecastData);
                    this.setState({forecastData});
                }
            )
        )
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                dataWeatherData={forecast.data}
            />
        ));
    }

    renderProgress() {
        return <h3>"Cargando pronostico extendido"</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecastTitle">Pronóstico Extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;