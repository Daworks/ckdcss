import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Logo from '../../components/Logo';


import style from './App.scss';
let cls = classNames.bind(style);


class App extends Component {
  render() {
    return (
      <div className={ cls('App') }>
        <div className={ cls('App-Background') }>
          <div className={ cls('Background-Bar') }></div>
          <div className={ cls('Background-Bar') }></div>
          <div className={ cls('Background-Bar') }></div>
          <div className={ cls('Background-Bar') }></div>
        </div>
        <Logo big={true} />
      </div>
    );
  }
}

export default App;
