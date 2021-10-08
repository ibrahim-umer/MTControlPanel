import React from 'react';
import './Adv.css';
import SigninGoogle from '../../../../Firebase/Auth/GoogleAuth'
import SigninFacebook from '../../../../Firebase/Auth/Facebook'
import * as emailpassAuth from '../../../../Firebase/Auth/EmailPasswordAuth'
import { Component } from 'react';


class AdvRegister extends Component{
    state={
        newUser:{
            fName: '',
            lName: '',
            eMail: '',
            password: '',
        }
    }
    
    handleChangeFName = (event)=>{
        this.setState({newUser:{
            fName: event.target.value,
            lName: this.state.newUser.lName,
            eMail: this.state.newUser.eMail,
            password: this.state.newUser.password
        }});
    }
    handleChangelName = (event)=>{
        this.setState({newUser:{
            fName: this.state.newUser.fName,
            lName: event.target.value,
            eMail: this.state.newUser.eMail,
            password: this.state.newUser.password
        }});
    }
    handleChangeEMail = (event)=>{
        this.setState({newUser:{
            fName: this.state.newUser.fName,
            lName: this.state.newUser.lName,
            eMail: event.target.value,
            password: this.state.newUser.password
        }});
    }
    handleChangePassword = (event)=>{
        this.setState({newUser:{
            fName: this.state.newUser.fName,
            lName: this.state.newUser.lName,
            eMail: this.state.newUser.eMail,
            password: event.target.value
        }});
    }
       render(){
           console.log(this.state.newUser);
        return(
            <div class="container">
            <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                        <div class="col-lg-7">
                            <div class="p-5">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>
                                <form class="user">
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input  onChange={this.handleChangeFName} type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="First Name"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input onChange={this.handleChangelName} type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input onChange={this.handleChangeEMail} type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address"/>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input onChange={this.handleChangePassword} type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password"/>
                                        </div>
                                        <div class="col-sm-6">
                                            <input onChange={()=>{}} type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password"/>
                                        </div>
                                    </div>
                                    <a  class="btn btn-primary btn-user btn-block">
                                        Register Account
                                    </a>
                                    <hr/>
                                    <a onClick={()=> SigninGoogle()}  class="btn btn-google btn-user btn-block">
                                        <i class="fab fa-google fa-fw"></i> Register with Google
                                    </a>
                                    <a onClick={()=> SigninFacebook()} class="btn btn-facebook btn-user btn-block">
                                        <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                    </a>
                                </form>
                                <hr/>
                                <div class="text-center">
                                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
        }
    }

 export default AdvRegister;
