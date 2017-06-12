//dependencies and styles
import React, {Component} from 'react';
import * as RB from 'react-bootstrap';
import axios from 'axios';
import jsonp from 'jsonp';
//import components
import CityForm from './CityForm.js';
import CityMisc from './CityMisc';
import CityTemp from './CityTemp';
import CityWeather from './CityWeather';

class WeatherContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            weatherData: [],
            location: [],
            metric: "Celcius"
        };
        this.loadData = this.loadData.bind(this);
        this.convertMetric = this.convertMetric.bind(this);
    }

    loadData(){

        let currentLatitude = 0;
        let currentLongitude = 0;

        let showPosition = (position) => {
            let currentLatitude = position.coords.latitude;
            let currentLongitude = position.coords.longitude;
            console.log(currentLatitude);
            console.log(currentLongitude);

            let geolocationApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + currentLatitude + '%2C' + currentLongitude + '&language=en';
            let weatherApi = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/98df7da9696066bc797bbd84daa43e48/'+currentLatitude+','+currentLongitude+'?units=si';
            const apiUrl = 'https://api.darksky.net/forecast/98df7da9696066bc797bbd84daa43e48/'+currentLatitude+','+currentLongitude+'?units=si';

            jsonp(apiUrl, null, (err, data) => {
                if(err){
                    return err;
                }else{
                    this.setState({
                        weatherData: data
                    })  
                }
            })
            axios.get(geolocationApi)
                .then((geoRes) => {
                    this.setState({
                        location: geoRes.data
                    })                
                })
                .catch((err) => {
                    alert("Couldn't find data!");
                    return;
                })

        }
        
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            this.setState({
                weatherData: [],
                location: [],
                metric: "Celcius"
            });
            console.log("This browser doesn't like geolocation");
        }
    }

    convertMetric(){
        if(this.state.metric === "Celcius"){
            this.setState({
                metric: "Fahrenheit"
            });
        }else{
            this.setState({
                metric: "Celcius"
            });
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        //console.log(this.state);
        //console.log(this.state.weatherData);
        console.log(this.state);
        //arrays that will be passed as props
        let cityWeatherData = [];
        let cityTempData = [];
        let cityMisc = [];
        let currentConditions = "";


        if(this.state.location.results){
            cityWeatherData.push(this.state.location.results[2].formatted_address);
        }
        
        if(this.state.weatherData.currently){
            let currentWeatherType = this.state.weatherData.currently.summary;
            let currentTemperature = this.state.weatherData.currently.temperature;
            if(this.state.metric === "Fahrenheit"){
                currentTemperature = (currentTemperature * (9 / 5)) + 32;
            }
            currentTemperature = Math.round(currentTemperature);

            if(currentTemperature % 1 != 0){

            }

            cityWeatherData.push(currentWeatherType, ""+currentTemperature+" "+this.state.metric+"");

            let minTemp = this.state.weatherData.daily.data[0].temperatureMin;
            let maxTemp = this.state.weatherData.daily.data[0].temperatureMax;
            cityTempData.push("Daily Minimum: "+minTemp+"c", "Daily Maximum: "+maxTemp+"c");

            let wind = this.state.weatherData.currently.windSpeed;
            let humidity = this.state.weatherData.currently.humidity;
            humidity = humidity * 100;
            cityMisc.push("Wind: "+wind+" MPH", "Humidity: "+humidity+"%");

            currentConditions = this.state.weatherData.currently.icon;
            console.log(currentConditions);
        }else{
            cityWeatherData.push("No Data Available");
        }

        return(
            <RB.Grid fluid>
                <RB.Row>
                    <RB.Col className="no-padding" md={12}>
                        <div className="bk1 text-center">
                            <CityWeather cwData={cityWeatherData} conditions={currentConditions} />
                            <button className="btn btn-primary" onClick={this.convertMetric}>Convert</button>
                        </div>
                    </RB.Col>
                </RB.Row>
                <RB.Row>
                    <RB.Col id="groupedDivs" className="no-padding" md={12}>
                            <RB.Col className="no-padding" md={6}>
                                <div className="bk2">
                                    <CityMisc cmData={cityMisc}/>
                                </div>
                            </RB.Col>
                            <RB.Col className="no-padding" md={6}>
                                <div className="bk3">
                                    <CityTemp ctData={cityTempData}/>
                                </div>
                            </RB.Col>
                    </RB.Col>
                </RB.Row>
            </RB.Grid>
        )
    }
}

export default WeatherContainer;