import React from 'react';
import './App.css';
import ClassComponent from './../ClassComponent/ClassComponent';

function App(props) {
  console.log(props.data);
  let link = "https://reactjs.org";

  return (
    <div className="App">
    <ClassComponent />
      <header className="App-header">
      
        { props.data ? (<span>{props.textForDiv}</span>) : null}
      </header>
    </div>
  );
}

export default App;
