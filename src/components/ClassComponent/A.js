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


    // TODO: Write button function that take count min and max from A and  B, then random number pass to B and from B to A

    // let randomNum;

    render() {

        return(
            <div>

                <B test={this.state.test} changeNum={this.handleChange} />
                <h2>Text from input in A: {this.state.test}</h2>

                <input type="text" onChange={this.handleChange} value={this.state.test}  placeholder="Write something ('test' - show some random number)" />

                

                {/*  */}
                {/* <button 
                type="button"
                onClick={() => {props.randomNum} ? {props.randomNum} : null} >
                Random number
                </button> */}

                
                
                { this.props.number ? (
                    {props.btnRandom}
                    <h1>Random number from C: {this.props.number}</h1>
                    ) : null}
                

            </div>
        )
    }
}




export default A;
