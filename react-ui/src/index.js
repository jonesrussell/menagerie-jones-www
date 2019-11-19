import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Contact from './components/Contact'
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
	<div class="container">
  <header>
		<Switch>
				<Route component={Menu} />
		</Switch>
  </header>

  <nav>
  </nav>

  <main>
			<Main />
			<Switch>
				<Route component={Contact} />
			</Switch>
  </main>

  <aside>
  </aside>

  <footer>
			<Switch>
				<Route exact path='/' />
				<Route component={Footer} />
			</Switch>
  </footer>
</div>
	</BrowserRouter>
), document.getElementById('body-container'));

registerServiceWorker();
