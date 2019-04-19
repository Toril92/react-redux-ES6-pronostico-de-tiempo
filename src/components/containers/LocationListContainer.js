import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from '../LocationList';
import {setSelectedCity, setWeather} from "../../actions";
import {getWeatherCities} from '../../reducers';
import {connect} from "react-redux";

class LocationListContainer extends Component {
    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    };

    render() {
        return (
            <div>
                <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectedLocation}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
});

const mapDispatchToProps = dispatch => {
    return {
        setCity: value => dispatch(setSelectedCity(value)),
        setWeather: cities => dispatch(setWeather(cities)),
    }
};


LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);