import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
//import 'jquery/dist/jquery.min.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Nav />
			<Header />
			<div className="container">
				<Main />
			</div>
			<Footer />	
		</div>
	</BrowserRouter>
), document.getElementById('body-container'));

registerServiceWorker();
