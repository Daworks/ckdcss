import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PageContainer from '../../components/PageContainer';
import Header from '../../components/Header';


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
        <PageContainer>
          <Header />
        </PageContainer>
      </div>
    );
  }
}

export default App;
