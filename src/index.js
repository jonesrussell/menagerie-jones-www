import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Menu />
			<div className="container">
				<Main />
			</div>
			<Footer />	
		</div>
	</BrowserRouter>
), document.getElementById('body-container'));

registerServiceWorker();
