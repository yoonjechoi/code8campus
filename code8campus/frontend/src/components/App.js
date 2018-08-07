import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import logo from '../logo.svg';
import styles from './App.scss';

import NavigationBar from 'components/NavigationBar';
import PostList from 'components/PostList';

// import Courses from 'components/Courses';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/*<Route exact path="/" components={Home}></Route>*/}
            {/*<Route exact path="/blog/" components={Blog}></Route>*/}
            {/*<Route exact path="/courses/" components={Courses}></Route>*/}
            {/*<Route exact path="/contact/" components={Contact}></Route>*/}
          </Switch>
          <NavigationBar></NavigationBar>
        </div>
      </Router>
    );
  }

  render2() {
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
