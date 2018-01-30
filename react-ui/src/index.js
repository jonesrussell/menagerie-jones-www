import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Menu from './components/Menu';
import Main from './components/Main';
import Contact from './components/Contact'
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route component={Menu} />
			</Switch>
			<div className="container">
				<Main />
			</div>
			<Switch>
				<Route exact path='/' />
				<Route component={Contact} />
			</Switch>
			<Switch>
				<Route exact path='/' />
				<Route component={Footer} />
			</Switch>
		</div>
	</BrowserRouter>
), document.getElementById('body-container'));
  
registerServiceWorker();
