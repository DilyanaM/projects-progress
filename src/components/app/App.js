import React from 'react';
import './App.scss';
import Header from '../layout/header/Header';
import Sidebar from '../layout/sidebar/Sidebar';
import Container from '../container/Container';

const App = () => (
  <div className="app">
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <Container />
      </div>
    </div>
  </div>
);

export default App;
