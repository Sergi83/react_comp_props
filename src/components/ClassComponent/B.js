import React from 'react';
import C from './C';
// import A from './A';

function B(props) {
    console.log(props, 'B component');
    
  return (

    <div>
          <C test={props.test} changeNum={props.changeNum}/>
    </div>
  );
}

export default B;
