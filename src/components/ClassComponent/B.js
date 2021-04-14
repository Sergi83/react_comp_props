import React from 'react';
import C from './C';
import A from './A';

function B(props) {
    console.log(props, 'B component');

    // 1. can wrap return into if statement
    if (props.test && props.changeNum) {

  return (
    // Result from component B
    <div>
          <C test={props.test} changeNum={props.changeNum}/>
    </div>
  );
}
// 2. do not send props back to A - infinite loop
if (props.randNum ) {
  <div>
  <A randNum={props.randNum} />
  </div>
}
}

export default B;
