import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Paper, AppBar} from 'material-ui';
import ForecastExtendedContainer from "./components/containers/ForecastExtendedContainer.js";
import './App.css';
import LocationListContainer from "./components/containers/LocationListContainer";


const cities = [
    'Granada,es',
    'Madrid,es',
    'Barcelona,es',
    'Ciudad de México,mx',
];

class App extends Component {

    render() {
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
                                    <ForecastExtendedContainer/>
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