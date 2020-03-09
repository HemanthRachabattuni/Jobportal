import React  from 'react'
import reactDom from "react-dom";
import {Link ,Route, BrowserRouter as Router} from 'react-router-dom';

import '../App.css'
import { NavLink } from 'react-bootstrap';

 class Login extends React.Component {


    constructor(props){
        super(props);
        this.state={isLoginOpen:true, isRegisterOpen:false};
    }
    showLoginBox(){
        this.setState({isLoginOpen:true, isRegisterOpen:false});
    }
    showRegisterBox(){
        this.setState({isRegisterOpen:true, isLoginOpen:false});
    }

    render() {
        return (
                <div className="root-container">
                    <div className="box-controller">
                        <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                            Login
                        </div>
                        <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}  onClick={this.showRegisterBox.bind(this)}>
                            SignUp
                        </div>
                    </div>
                    <div className="box-container">
                    {this.state.isLoginOpen && <LoginBox/> }
                    {this.state.isRegisterOpen && <RegisterBox/>}
                    </div>
                   
                </div>
        
        )
    }
}


class LoginBox extends  React.Component{

    render(){
        return(
            

        <div className="inner-container">
             <div className="header">
                Login
            </div>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">Email*</label>
                    <input type="text" name="username" className="login-input" placeholder="Email"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" className="login-input" placeholder="Password"/>
                </div>

                <button type="button" className="login-btn" onClick={this.onClick}>Login</button>
            </div>
           
        </div>
        

        )
    }
}


class RegisterBox extends  React.Component{

    render(){
        return(
        <div className="inner-container">
            <div className="header">
                SignUp
            </div>
            <div className="box">
                <div className="input-group">
                    <label htmlFor="username">FullName*</label>
                    <input type="text" name="username" className="login-input" placeholder="FullName"/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email*</label>
                    <input type="Text" name="Email" className="login-input" placeholder="Email"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" name="password" className="login-input" placeholder="Password"/>
                </div>
                <div className="input-group">
                    <label htmlFor="password"> Conform Password*</label>
                    <input type="password" name="password" className="login-input" placeholder=" Conform Password"/>
                </div>
               

                <button type="button" className="login-btn">SignUp</button>
            </div>
        </div>
        )
    }
}

export default Login