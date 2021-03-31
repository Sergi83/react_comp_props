import React from 'react';
import Title from './../Title/Title';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            flag: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleFlagChange = this.handleFlagChange.bind(this)
    }

    // setState method write data to "this.state" "name"
    handleChange(e) {

        let a = e.target.value;

        this.setState({
            name: a,
            flag: !this.state.flag,
            count: 1
        } // write logic here if needed
        )
        // DO NOT put any logics here (just inside setState or before, or get it with props)
    }

    // every function should have comments
    // hide rendered from input string
    handleFlagChange() {
        this.setState({flag: !this.state.flag})
        // every time when push the button (32 line) change to mirroring (if state flag: true - here become false, if state flag: false - here - true)
    }

    // componentDidMount (life cycle method) - showing just one times when page rendering (can be used when modal window open)
    componentDidMount() {
        console.log("1");
    }

    // TODO: work with lists, keys, functions and components compoze, proptypes and comments

    
    render() {
        // logic can be here
        return(
            <div>
            {/* onChange binding with handleChange method */}
                <input type="text" onChange={this.handleChange} value={this.state.name} />
                <br/>
                <button onClick={this.handleFlagChange}>PUSH ME</button>
                {this.state.flag && <Title title={this.state.name} close={this.handleFlagChange}/>}

                {/* or {this.state.flag ? (<Title title={this.state.name} myFunc={this.handleFlagChange}/>):null} */}
            </div>
        )
    }

}

export default Search;