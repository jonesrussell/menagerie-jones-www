import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import 'jquery/dist/jquery.min.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<BrowserRouter>
		<Nav />
	</BrowserRouter>
), document.getElementById('navbarResponsive'));

ReactDOM.render((
		<App />
), document.getElementById('root'));

registerServiceWorker();
