import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import Contact from './components/Contact'

export default class Homepage extends Component {
	render() {
		return (
			<div>
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route component={Menu} />
			</Switch>
			<div className="container">
				<Main />
			</div>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route component={Contact} />
			</Switch>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route component={Footer} />
			</Switch>
		</div>
	</BrowserRouter>
), document.getElementById('body-container'));
  
registerServiceWorker();
