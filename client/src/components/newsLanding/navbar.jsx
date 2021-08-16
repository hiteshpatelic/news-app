import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import './navbar.css';
import TodayNews from './todayNews/todaynews';
import Login from '../authentication/login/login';
import SignUp from '../authentication/signUp/signUp';

const Logo= ()=>{
    return(
        <div className="logo">
            <h1>#get_today_news</h1>
        </div>
    )
}



const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <Logo/>
                <div className="navlist">
                    <ul>
                    <li><Link className="link" to="/">Home</Link> </li>
                    <li><Link to="/login">login</Link> </li>
                    <li><Link to="/signup">SignUp</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={TodayNews}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                    <Redirect from="/" to="/"/>
                </Switch>    
            </div>
        </Router>
     );
}
 
export default Navbar;