import React, { Component } from 'react';
// the above {} means import react and pull off property component as a variable called Component
// exact same thing as above
//const Component = React.Component;

/*
 * Three important modules
 * 1 - exporting Modules
 * 2 - Modules
 * 3 - State - a plain JS object that is used to record in React to user events
 */

 /*
const SearchBar = () => {
    return <input />;
};
*/

// I want to export this very piece of search_bar.js, SearchBar
//export default SearchBar;

/*
 * Create a component with a Class now, not with function like the above SearchBar component
 * It is a React component called a " functional component "
 * I can give it all the functionality of a React by extending it from React.Components
 * 
 * instead of writting ' class SearchBarC extends React.Component ', I can import { Component } - this is ES6 syntax
 * 
 * Handling events has two steps
 * 1- declare an event handler ( it's a function that should be run whenever an event runs )
 * 2- pass the event handler to the element we want to monitor for the event
 */
class SearchBarC extends Component {
    // initialize state - I can not initialize state in function based component
    constructor(props) {
        super(props);
        // term is the property to hold the change whenever the user changes the search text
        this.state = {
            term: ''
        }
    }

    /*
     * give it a capability to render itself
     * to do so, call a render method (function)
     * the SearchBarC is going to call the render() function
     * render function must return a JSX 
     */
    render() {
        // more events on react docs
        //return <input onChange = { this.ZOnInputChange } />;

        // another way to return is
        return (
            <div className = "search-bar">
                <input  className = "search-bar-box"
                    value = { this.state.term } // when I tell the input it's value is provided by ' this.state.term ', I'm turning it to a controlled component
                    onChange = {
                        //event => console.log( event.target.value )
                        //(event) => console.log( event.target.value )
                        //event => this.setState({ term: event.target.value })
                        event => this.OnInputChange(event.target.value)
                    }
                />
                <br />
                <input className = "search-bar-box2" onChange = { this.ZOnInputChange } />
                <br />
                <br />
                Value of the input: { this.state.term }
            </div>
        );
    }

    OnInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
        console.log(term);
    }

    // define an event handler - which is a function
    // on = handle, Input = name of the element I'm watching for the event, Change = the name of event itself
    // event object describes information (context) about the event that occured
    ZOnInputChange(event) {
        console.log(event.target.getAttribute('value'));
        console.log(event.target.value);
        console.log(event);
    }
}

export default SearchBarC;
