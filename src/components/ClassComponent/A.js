import React from 'react';
import B from './B';


// TODO: 1) render a text from input in class component A; 2) take props (button with a function that give random number) from C (passed from B) component


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
        // console.log(e);

        // e - the value after pushed button in component C (get random number, 3 signs after comma)
        let a = e*1000;

        // input value changing to the "a" (random number * 1000) if button pushed
        if (e && e.target && e.target.value) {
            // a - contain any input value or value from component C (random number),  if value from C - the value * 1000
            a = e.target.value
        }

        this.setState({
            test: a
        })
        
    }

    render() {

        return(
            <div>

                <B 
                    test={this.state.test} 
                    changeNum={this.handleChange} 

                    />

                <h2>
                Text from input in A: {this.state.test}
                </h2>

                <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.test} 
                placeholder="Write some text" 

                />


                {/* in class component need to write a props with this.props. ... */}
                { this.props.test ? <h1>Random number from C: {this.props.test}</h1> : null}

            </div>
        )
    }
}




export default A;
