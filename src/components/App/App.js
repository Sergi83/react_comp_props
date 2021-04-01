import React from 'react';
import './App.css';
import A from './../ClassComponent/A';

// import C from '../ClassComponent/C';

function App(props) {
  console.log(props.test, "test props");
  // let link = "https://reactjs.org";

  return (
    <div className="App">
    <A />
      {/* <header className="App-header">
      
        { props.data ? (<span>{props.textForDiv}</span>) : null}
      </header> */}
    </div>
  );
}

export default App;
