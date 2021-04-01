import React from 'react';
import B from './B';


// TODO: 1) render a text from input in class component A; 2) take props from B (passed from C) component


class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
            
            // flag: true
        }

        this.handleChange = this.handleChange.bind(this)
        // this.getRandomNum = this.getRandomNum.bind(this)
    }


    
    // setState method write data to props ("this.state" "name")
    handleChange(e) {

        this.setState({
            test: e.target.value
            // flag: !this.state.flag,
            // count: 1
        })
        
    }


    // TODO: Write button function that take count min and max from A and  B, then random number pass to B and from B to A

    
    render() {
        return(
            <div>

                
                <h2>Text from input in A: {this.state.test}</h2>

                <input type="text" onChange={this.handleChange} value={this.state.test}  placeholder="Write something ('test' - show some random number)" />

                {/*  */}

                <h1>Random number from C: {randomNum*1000}</h1>
                <B num={this.props.children.num}/>
                <button
                type="button"
                onClick={(this.props.children.num)=> randomNum = this.children.num}
                >
                    

            </button>
            </div>
        )
    }

}


export default C;
