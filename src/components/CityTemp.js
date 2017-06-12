//dependencies and styles
import React, {Component} from 'react';
import WeatherContainer from './WeatherContainer';
import * as RB from 'react-bootstrap';

class CityTemp extends Component {

    constructor(props){
        super(props);   
    }

    render(){      
        
        return (
            <div>
                <RB.Col xs={6}>
                    <div className="text-center vertical-align">
                        <img className="miscIcons" src="https://cdn4.iconfinder.com/data/icons/weather-conditions/512/cold_temperature-512.png" />
                        <p className="iconText">{this.props.ctData[0]}</p>
                    </div>
                </RB.Col>
                <RB.Col xs={6}>
                    <div className="text-center vertical-align">
                        <img className="miscIcons" src="https://cdn2.iconfinder.com/data/icons/coloured-weather-icon-set-svg/100/Coloured_Weather_Icon_Set_by_ViconsDesign-12-512.png" />
                        <p className="iconText">{this.props.ctData[1]}</p>
                    </div>
                </RB.Col>
            </div>
        );
    }
}

export default CityTemp;