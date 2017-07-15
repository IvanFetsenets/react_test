import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Devices from './devices';
import registerServiceWorker from './registerServiceWorker';

const devicesName = ["Notebooks","Tablets","Mobile phones"];

ReactDOM.render(<div><Devices devicesName={devicesName}/></div>, document.getElementById("devices"));
registerServiceWorker();
