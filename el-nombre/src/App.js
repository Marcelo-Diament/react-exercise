import React, { useState } from 'react';
import Header from './components/Header';
import SimpleSlider from './components/SimpleSlider'
import { dataLayerInit, updateDataLayer } from './components/Helpers/DataLayer'
import './App.css';

function App() {

  const [clicks, setClicks] = useState(1)

  if (clicks === 1) { dataLayerInit() }

  const countClick = () => {
    setClicks(clicks + 1)
    updateDataLayer('clicks', clicks)
  }

  return (
    <>
      <div className="App" onClick={() => countClick()}>
        <Header />
        <SimpleSlider />
      </div>
      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"></script>
    </>
  );
}

export default App;
