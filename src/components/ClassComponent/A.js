import React from 'react';
import B from './B';


// 1. Створити класовий компонент в якому з допомогою стану компоненту всі дані з інпута в який юзер буде вводити текст - будуть в режимі реального часу відображатись в функціональному компоненті в h1 тегу. 
	
	
	// 2. Створити 3 компонента крізь які будемо передавати функцію з рандомним числом та повертати в головний компонент  де отримане значення з компонента  С будемо множити на 1000 та записувати в стейт . (А -> B -> C > B > A)

const mult = 1000;
const result = numC*mult;

function A(props) {
  console.log(numA, numC 'A res');
  const mult = 1000;
  const result = numC*mult;
  
  return (
    <div className="App">
        <h1>Result from component A</h1>

        <input type="text" onChange={this.handleChange} value={this.state.numA}  placeholder="Write an integer number" />
                <br/>

        <A numA={numA} resC={result} />
    </div>
  );
}

export default A;
