import React from 'react';
import C from './C';

function B(props) {
  
  return (

    <div>
          <C test={props.test} changeNum={props.changeNum}/>
    </div>
  );
}

export default B;
