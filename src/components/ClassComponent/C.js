import React from 'react';
import B from './B';


// TODO: take some number from input in A through B (here take another number) -> here find random number between A and B -> pass the random number to A through B

// TODO: here create function that make random numbers
class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numC: "",
            numB,
            numA,
            
            flag: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.getRandomNum = this.getRandomNum.bind(this)
    }


    // get random number (function)
    getRandomNum (numA, numB) {
        if (numA > numB) {
            this.setState({ 
                numC: (Math.floor(Math.random() * (numA - numB + 1)) + numB).target.value
            })
        } else if (numA < numB) {
            this.setState({ 
                numC: (Math.floor(Math.random() * (numB - numA + 1)) + numA).target.value
            })
        } else if (numA == numB) {
            this.setState({ 
                numC: (Math.floor(Math.random() * (numA - numB + 1)) + numB).target.value
            })
        } else {
            console.log("Some error: numA, numB", numA, numB)
        }
    }

    // setState method write data to "this.state" "name"
    handleChange(e) {

        this.setState({
            num: e.target.value,
            flag: !this.state.flag,
            // count: 1
        })
        
    }


    // TODO: Write button function that take count min and max from A and  B, then random number pass to B and from B to A

    
    render() {
        return(
            <div>

                <h1>Random number from C</h1>
                

                <button
                type="button"
                onClick={()=> getRandomNum(numA, numB)}
                >
                    

            </button>
            </div>
        )
    }

}


export default C;
