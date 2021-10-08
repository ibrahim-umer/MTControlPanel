import React, { Component } from 'react';
import './Register.module.css';


class Register extends Component {
    render(){
        return (
            <div className="container mt-4" style={{width: "80%"}}>
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            Registration PANEL
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form>
                                    <div className="form-group">
                                        <label className="form-control-label">EMAIL ADDRESS</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control" ></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">CONFERM PASSWORD</label>
                                        <input type="password" className="form-control" ></input>
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 ">
                                        <lable style={{fontSize: "14px"}}><input type="checkbox" /> Agree </lable>
                                        </div>
                                        <div className="col-lg-6 login-btn login-button">
                                            <button type="submit" className="btn btn-outline-primary btn-light" style={{alignContent: "center"}}>LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;