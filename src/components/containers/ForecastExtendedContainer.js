import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from "../ForecastExtended";
import {connect} from "react-redux";
import {getCity, getForecastDataFromCities} from "../../reducers";


class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            city !== undefined ?
                <ForecastExtended city={city} forecastData={forecastData}/> : null
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        city: getCity(state),
        forecastData: getForecastDataFromCities(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForecastExtendedContainer);