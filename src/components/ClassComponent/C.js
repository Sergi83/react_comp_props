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
        this.handleFlagChange = this.handleFlagChange.bind(this)
        this.getRandomNum = this.getRandomNum.bind(this)
    }


    // get random number (function)
    getRandomNum (numA, numB) {
        if (numA > numB) {
            this.setState({ 
                numC: Math.floor(Math.random() * (numA - numB + 1)) + numB
            })
        } else if (numA < numB) {
            this.setState({ 
                numC: Math.floor(Math.random() * (numB - numA + 1)) + numA
            })
        } else if (numA == numB) {
            this.setState({ 
                numC: Math.floor(Math.random() * (numA - numB + 1)) + numB
            })
        } else {
            this.setState({numC: "error"});
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

    // 
    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }


    // TODO: Write button function that take count min and max from A and  B, then random number pass to B and from B to A

    
    render() {
        return(
            <div>

                <h1>Random number from C</h1>
                <p>Based on input from A and B
                {numC ? `Random number: ${numC}`: 'Get random number'}</p>

                <button
                type="button"
                onClick={()=> getRandomNum()}
                >
                    

            </button>



            {/* onChange binding with handleChange method */}
                <input type="text" onChange={this.handleChange} value={this.state.num} />
                <br/>
                <button onClick={this.handleFlagChange}>randomizer(C)</button>
                {this.state.flag && <Title title={this.state.num} close={this.handleFlagChange}/>}

                {/* or {this.state.flag ? (<Title title={this.state.name} myFunc={this.handleFlagChange}/>):null} */}
            </div>
        )
    }

}


export default C;
