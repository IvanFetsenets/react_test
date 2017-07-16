import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import StarRatings from 'react-star-ratings';
import Devices from "./devices";
import registerServiceWorker from "./registerServiceWorker";

const devicesName = [["Notebooks","notebooksList"],["Tablets","tabletsList"],["Mobile phones","mobilePhonesList"]];

// let stateIs = {notebooksList:true,tabletsList:false,mobilePhonesList:false};

ReactDOM.render(<div><Devices devicesName={devicesName}/></div>, document.getElementById("devices"));
registerServiceWorker();
