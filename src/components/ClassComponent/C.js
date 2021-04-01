import React from 'react';
import B from './B';


// 1. Створити класовий компонент в якому з допомогою стану компоненту всі дані з інпута в який юзер буде вводити тест - будуть в режимі реального часу відображатись в функціональному компоненті в h1 тегу. 
	
	
	// 2. Створити 3 компонента крізь які будемо передавати функцію з рандомним числом та повертати в головний компонент  де отримане значення з компонента  С будемо множити на 1000 та записувати в стейт . (А -> B -> C > B > A)

  // TODO: here create function that make random numbers (if word test is in props)

function C(props) {
  console.log(props.test, 'C res');

  if (props.test == "test") {
  // get random number (function)
  let num = Math.random().toFixed(4);

  return (
    <div>
        {/* <h1>Result from component C</h1>

        <p>Based on input from A and B
                {this.state.numC ? `Random number: ${this.state.numC}`: 'Get random number'}</p>

        <input type="text" onChange={this.handleChange} value={this.state.numA}  placeholder="Write an integer number" /> */}
                <br/>

        <C num={this.props.num} />
    </div>
  );
}
}

export default C;
