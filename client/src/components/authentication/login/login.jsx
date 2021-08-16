import React, { Component } from 'react';
import axios from "axios";
import Joi from 'joi-browser';
import './login.css';
import { setAuth } from '../../../redux/action/userAction';
import store from '../../../redux/store/store';

class Login extends Component {
    state = { 
        account: {email: '',password:''},
        error: {}
    }

    schema = {
        email: Joi.string().required().email(),                                      
        password: Joi.string().required().min(6)
    }

    validate = () =>{
        const error = Joi.validate(this.state.account, this.schema, {abortEarly: false});
        return Object.keys(error).length === 0 ? null :error;

    }

    handleChange=(e)=>{ 
        const state = {...this.state}
        state.account[e.target.name]= e.target.value; 
        this.setState(state)
    }
    handleSubmit = async e=>{
        e.preventDefault();

        const {error} = this.validate();
        this.setState({error : error || {}});
        if (error) return;

        await axios.post('http://localhost:3030/api/user/login', {
            "email": this.state.account.email,
            "password" : this.state.account.password
        })
        .then(res=> store.dispatch(setAuth(res)))
        .catch(err=> this.setState({error : {details:[{message: err.response.data}]}}));
    }

    render() { 
        const {account, error} =this.state;
        return ( 
            <div className="login">
                <form onSubmit ={this.handleSubmit}>
                    <h1>Login</h1>
                    <div className="input">
                        <label htmlFor='email'> Email</label>
                        <input name="email" type="email" value={account.email} onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor='password'>Password</label>
                        <input name="password" type="password" value={account.password} onChange={this.handleChange}/>
                    </div>
                    <div className="error">
                        <ul>{Object.keys(error).length >0 ? error.details.map(e=>{
                                return e = <li key = {e.message}>{e.message}</li>
                            }) : null}
                        </ul>
                    </div>
                    <div className="button">
                        <button>Login</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Login;