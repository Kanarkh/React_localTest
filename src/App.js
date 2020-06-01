import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }
    state = {
        count: 0
    };
    add = () => {
        console.log("add");
        //setState를 실행할때마다 새로운 count값을 가지고 render를 실행시킨다
        //
        this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
        console.log("minus");
        // this.state.count -= 1;
        this.setState(test => ({count: test.count - 1}));
    };

    render() {
        console.log("componet rendering")
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("updated")
    }

    componentDidMount() {
        console.log("component did mount")
    }
    componentWillUnmount() {
        console.log("Goodbye, world");
    }
}

export default App;
