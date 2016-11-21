import React, { Component } from 'react';
import logo from './logo.svg';
import classNames from 'classnames/bind';
import style from './App.scss';

let cls = classNames.bind(style);


class App extends Component {
  render() {
    return (
      <div className={ cls('App') }>
        
      </div>
    );
  }
}

export default App;
