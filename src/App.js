import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper, AppBar } from 'material-ui';
import ForecastExtended from "./components/ForecastExtended.js";
import './App.css';
const cities = [
  'Granada,es',
  'Madrid,es',
  'Barcelona,es',
  'Ciudad de México,mx',
];


class App extends Component {

  constructor() {
    super();
    this.state = { city: null};
  }
  handleSelectedLocation = city => {
    this.setState({ city });
  }
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid fluid className="App">
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                {city &&
                <ForecastExtended city={city}></ForecastExtended>
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
