import React, {Component} from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem/index";
import "./styles.css";

// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

class ForecastExtended extends Component {

    constructor(props) {
        super(props);
        this.state = {forecastData: null}
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
        }
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
        return <h3>"Cargando pronóstico extendido"</h3>
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