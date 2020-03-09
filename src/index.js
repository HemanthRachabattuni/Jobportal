import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './pages/Login2';
import Slider from './pages/Slider/Slider';
import Homepage from './Homepage/Homepage';
//  for dashboard uncomment the below line and type Admin in the place of Homepage in line 13
// import Admin from './dashboard/Admin';

import * as serviceWorker from './serviceWorker';
import Login2 from './pages/Login2';

ReactDOM.render(<Homepage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
