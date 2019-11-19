import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Contact from './components/Contact';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';
// const pathToRegexp = require('path-to-regexp');
import pathToRegexp from 'path-to-regexp';

let keys = [];
let notHome = pathToRegexp('/:url', keys);

ReactDOM.render(
  <BrowserRouter>
    <div className='layout-grid'>
      <header>
        <Switch>
          <Route path={notHome} component={Menu} />
        </Switch>
      </header>

      <div className='nav'></div>

      <main>
        <Main />
      </main>

      <aside></aside>

      <footer>
        <Switch>
          <Route path={notHome} component={Contact} />
          <Route path={notHome} component={Footer} />
        </Switch>
      </footer>
    </div>
  </BrowserRouter>,
  document.getElementById('body-container')
);

registerServiceWorker();
