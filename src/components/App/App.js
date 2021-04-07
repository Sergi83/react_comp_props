import React from 'react';
import './App.css';
import A from './../ClassComponent/A';

// import C from '../ClassComponent/C';

function App(props) {
  console.log(props, "app props");

  return (
    <div className="App">
    <A />
    
    </div>
  );
}

export default App;
