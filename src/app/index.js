var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Ninjaas</h1>
                <p>TADA</p>
            </div>
        );
    }
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
