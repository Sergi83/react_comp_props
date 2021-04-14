import React from 'react';
import B from './B';


// TODO: 1) render a text from input in class component A; 2) take props from B (passed from C) component


class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
            
            // flag: true
        }

        this.handleChange = this.handleChange.bind(this)
        
    }


    
    // setState method write data to props ("this.state" "test")
    handleChange(e) {

        this.setState({
            test: e.target.value
            // flag: !this.state.flag,
            // count: 1
        })
        
    }

    render() {

        return(
            <div>

                <h2>Text from input in A: {this.state.test}</h2>

                <input type="text" onChange={this.handleChange} value={this.state.test}  placeholder="Write some text ('test' - show some random number)" />

                <h1>{this.state.test}</h1>

                { this.state.test &&
                <B test={this.state.test} changeNum={this.handleChange} />}
                {/*  */}
                <button 
                type="button"
                onClick={this.handleChange} >
                btnA
                </button>

                {/* in class component need to write a props with this.props */}
                { props.randNum ? <h1>Random number from C: {props.randNum}</h1> : null}

            </div>
        )
    }
}




export default A;
