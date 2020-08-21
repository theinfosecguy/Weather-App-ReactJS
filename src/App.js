import React from 'react';
import './App.css';
import Forecast from './forecast'
import Conditions from './Conditions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather App using React
      </header>
      <section>
        <Forecast/>
      </section>

    </div>
  );
}

export default App;
