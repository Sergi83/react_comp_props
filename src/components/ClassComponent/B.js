import React from 'react';
import C from './C';
import A from './A';

function B(props) {
    console.log(props, 'B component');

    if (this.props.test) {

  return (
    // Result from component B
    <div>
        
        <br/>
        
          <C test={props.test} changeNum={props.changeNum}/>
        <A number={props.randomNum} btnRandom={props.button} />
        
    </div>
  );
}
}

export default B;
