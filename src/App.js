import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, AppBar} from 'material-ui';
import ForecastExtended from "./components/ForecastExtended.js";
import './App.css';
import LocationListContainer from "./components/containers/LocationListContainer";


const cities = [
    'Granada,es',
    'Madrid,es',
    'Barcelona,es',
    'Ciudad de México,mx',
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {city: null};
    }

    render() {
        const {city} = this.state;
        return (
            <MuiThemeProvider>
                <Grid fluid className="App">
                    <Row>
                        <Col xs={12}>
                            <AppBar title="Weather App"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <LocationListContainer cities={cities}/>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Paper zDepth={4}>
                                <div className='detail'>
                                    {city &&
                                    <ForecastExtended city={city}/>
                                    }
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        );
    }
}
export default App;