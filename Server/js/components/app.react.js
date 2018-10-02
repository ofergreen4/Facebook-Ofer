import React from 'react';

//using es6 to extend the React.component class
class App extends React.Component {
    render() {
        // must return a single node (that way wrap other nodes)
        return (
            // access props
            <div>{this.props.text}</div>
        );
    }
};

//using es6 to export the App class

export default App;