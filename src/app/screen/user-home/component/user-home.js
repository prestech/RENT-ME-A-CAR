import React, {Component} from 'react'; 

export default class UserHome extends Component{

    render(){
      return ( <div>
                <h1>{this.props.homeMsg}</h1>
                <button>logout</button>
                <button>past transactions</button>
                <button>cart</button>
                <button>Account Setting</button>
            </div>);
    }
}