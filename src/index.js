import React from 'react';
import ReactDOM from 'react-dom';
import WeatherContainer from './components/WeatherContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherContainer/>, document.getElementById('root'));
registerServiceWorker();
