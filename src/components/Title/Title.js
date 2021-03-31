import React from 'react';

function Title(props) {
  let link = "https://reactjs.org";

  return (
    <div>
        <h1>
            {props.title}
        </h1>
        {/* in functional components no "this.", then if we want to write something - write "props.". And we don't need to write function's name (handleFlagChange) - write close */}
        <button onClick={props.close}>Close</button>
        {/* can call function from here and from "ClassComponent.js" */}
    </div>
  );
}

export default Title;
