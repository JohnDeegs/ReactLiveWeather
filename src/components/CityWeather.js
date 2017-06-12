//dependencies and styles
import React, {Component} from 'react';
import WeatherContainer from './WeatherContainer';
import * as RB from 'react-bootstrap';

class CityWeather extends Component {

    constructor(props){
        super(props);  
    }

    render(){      
        let icon = "";
        let currentConditionProp = this.props.conditions;
        currentConditionProp.toLowerCase();

        switch(currentConditionProp){
            case "rain":
                icon = <div className="icon rainy"><div className="cloud"></div><div className="rain"></div></div>;
                break;
            case "clear-day":
                icon = <div className="icon sunny"><div className="sun"><div className="rays"></div></div></div>;
                break;
            case "clear-night":
                icon = <div className="icon sunny"><div className="sun"><div className="rays"></div></div></div>;
                break;
            case "snow":
                icon = <div className="icon flurries"><div className="cloud"></div><div className="snow"><div className="flake"></div><div className="flake"></div></div></div>;
                break;
            case "sleet":
                icon = <div className="icon flurries"><div className="cloud"></div><div className="snow"><div className="flake"></div><div className="flake"></div></div></div>;
                break;
            case "wind":
                icon = <div className="icon cloudy"><div className="cloud"></div><div className="cloud"></div></div>;
                break;
            case "fog":
                icon = <div className="icon cloudy"><div className="cloud"></div><div className="cloud"></div></div>;
                break;
            case "cloudy":
                icon = <div className="icon cloudy"><div className="cloud"></div><div className="cloud"></div></div>;
                break;
            case "partly-cloudy-day":
                icon = <div className="icon cloudy"><div className="cloud"></div><div className="cloud"></div></div>;
                break;
            case "partly-cloudy-night":
                icon = <div className="icon cloudy"><div className="cloud"></div><div className="cloud"></div></div>;
                break;
            default:
                icon = <div>Loading...</div>
        }

            return (
            <div>
                <h1>Weather App</h1>
                <div className="cwText">
                    <div>
                        <p>{this.props.cwData[0]}</p>
                    </div>
                    <div id="weather-icon">
                        {icon}
                    </div>
                    <div>
                        <p>{this.props.cwData[1]}</p>
                    </div>
                    <div>
                        <p>{this.props.cwData[2]}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityWeather;