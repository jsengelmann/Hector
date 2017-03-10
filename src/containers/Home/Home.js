import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { MiniInfoBar } from 'components';


export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
          </div>
        </div>

        <div className="container">
          <MiniInfoBar/>
        </div>
      </div>


    );
  }
}
