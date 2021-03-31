import React from 'react';
import C from './C';
import A from './A';

function B(props) {
    console.log(numA, numC, 'B res');
  return (
    <div className="App">
        <h2>Result from component B</h2>

        <input type="text" onChange={this.handleChange} value={this.state.numB} placeholder="Write an integer number" />
                <br/>
        <B  numA={numA} numB={numB} numC={numC}/>
    </div>
  );
}

export default B;
