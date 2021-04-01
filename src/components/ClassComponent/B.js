import React from 'react';
import C from './C';
import A from './A';

function B(props) {
    console.log(numA, numC, 'B component');
  return (
    // Result from component B
    <div>
        
{/* 
        <input type="text" onChange={this.handleChange} value={this.state.numB} placeholder="Write an integer number" /> */}
                <br/>
        <B  test={props.test} num={props.num}/>
    </div>
  );
}

export default B;
