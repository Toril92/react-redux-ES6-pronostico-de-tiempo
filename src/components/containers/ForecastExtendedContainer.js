import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from "../ForecastExtended";
import {connect} from "react-redux";

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city !== undefined ? <ForecastExtended city={this.props.city}/> : null
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        city: state.city
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForecastExtendedContainer);