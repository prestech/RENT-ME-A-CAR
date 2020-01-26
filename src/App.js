import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

//import logo from './logo.svg';
import './App.css';
import HomePage from './app/screen/home/component/homepage'

//Just a quick test to make sure these components render
//There will be removed
import Login from './app/screen/login/component/loginpage'
import UserHome from './app/screen/user-home/component/user-home'

function App() {
  return (
    <Router>
         <div>
           <Route path="/" exact>
             <HomePage greeting="Welcome to Rent-me-a-car Homepage"/>
           </Route>

           <Route path="/login" exact>
              <Login title="Please enter valid username and password"/>
           </Route>
           
           <Route path="/home" exact>
             <UserHome homeMsg="You are logged into you home page"/>
           </Route>
           
          </div> 
    </Router>
    
   );
}

export default App;


/***
 * BUGS and Solutions 
 * 
 * Bug 1
 *  cause: import homePage from './app/screen/home/component/homepage'
 *  could not use <Homepage /> component cause the import began with a lower case 

 */