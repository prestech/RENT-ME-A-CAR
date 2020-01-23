import React, {Component} from 'react'; 

export default class Login extends React.Component{
    
    render(){
       return <div>
            <h2>{this.props.title}</h2>
            username: <input type="text"/> 
            <br></br>
            password: <input type="text"/>
        </div>;
    }
}