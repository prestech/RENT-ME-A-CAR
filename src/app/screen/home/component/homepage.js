import React, { Component } from 'react';
//import {render} from 'react-dom'

export default class HomePage extends Component{

    constructor(props){
        super(props); 
    }
    render(){
        return (<div>
            <h1> {this.props.greeting}</h1>
            <button>login</button>
            <button>signup</button>
        </div>);
    }
}

/**
 * Got the following error initially 
 *   Line 4:39:   'Component' is not defined               no-undef
     Line 10:17:  'React' must be in scope when using JSX  react/react-in-jsx-scope
     Line 11:13:  'React' must be in scope when using JSX  react/react-in-jsx-scope
 * Solution 
 * import React, { Component } from 'react'; instead of just import { Component } from 'react';
 */