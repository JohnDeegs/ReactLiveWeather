//dependencies and styles
import React, {Component} from 'react';
import WeatherContainer from './WeatherContainer';
import * as RB from 'react-bootstrap';

class CityMisc extends Component {

    constructor(props){
        super(props);   
    }

    render(){      
        //if there is no data on the initial render
        if(!this.props.cmData){
          return <div>No data available yet!</div>
        }
        
        return (
            <div>
                <RB.Row>
                    <RB.Col xs={6}>
                        <div className="text-center vertical-align">
                            <img className="miscIcons" src="https://cdn.iconscout.com/public/images/icon/free/png-512/wind-direction-indicator-pressure-navigation-374afd08901bd37f-512x512.png" />
                            <p className="iconText">{this.props.cmData[0]}</p>
                        </div>
                    </RB.Col>
                    <RB.Col xs={6}>
                        <div className="text-center vertical-align">
                            <img className="miscIcons" src="https://nest.com/support/images/misc-assets-icons/thermostat-humidity-icon.png" />
                            <p className="iconText">{this.props.cmData[1]}</p>
                        </div>
                    </RB.Col>
                </RB.Row>
            </div>
        );
    }
}

export default CityMisc;