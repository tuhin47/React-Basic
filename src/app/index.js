var React = require('react');
var ReactDOM = require('react-dom');

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap'],
            age:30
        }
    }, //getInitialState
    render: function(){
        setTimeout(function(){this.setState({age:35})}.bind(this),5000);
        return(
            <div id="todo-list">
                age:{this.state.age}
                <p>The busiest people have the most leisure...</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    } //render
});

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
