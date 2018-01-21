import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'

const NoMatch = () => (
  <div></div>
)

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path='/' component={NoMatch} />
				<Route component={Menu} />
			</Switch>
			<div className="container">
				<Main />
			</div>
			<Switch>
				<Route exact path='/' component={NoMatch} />
				<Route component={Footer} />
			</Switch>
		</div>
	</BrowserRouter>
), document.getElementById('body-container'));
  
registerServiceWorker();
