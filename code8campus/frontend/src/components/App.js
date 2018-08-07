import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import logo from '../logo.svg';
import 'bootstrap';
import styles from './App.scss';

import PostList from 'components/PostList';


class App extends Component {
  render2() {

    return (
      <Switch>
        {/*<Route exact path="/" component={Auth}></Route>*/}
      </Switch>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className={styles.App}>
          <header className={styles.AppHeader}>
            <img src={logo} className={styles.AppLogo} alt="logo"/>
            <h1 className={styles.AppTitle}>Welcome to React</h1>
          </header>
          <p className={styles.AppIntro}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <PostList/>
        </div>
      </div>
    );
  }
}

export default App;
