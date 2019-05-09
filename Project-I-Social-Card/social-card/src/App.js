import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer uri="https://reactjs.org" />
    </div>
  );
};

export default App;
