import React from 'react';
import { Component } from 'react';
import Cookie from 'universal-cookie/es6';
import Axios from "axios"
import { Redirect } from "react-router";
import { Spinner } from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            login: false,
            displayAnimator: false
        };
    this.loginUser = this.loginUser.bind(this);
    }
    
    loginUser=()=>{
        this.setState({displayAnimator: true})
        Axios.post(window.$domain + 'api/Users/LoginUser?UserName='+ this.state.user + '&Password='+ this.state.password )
        .then(resp=>{
            if(resp.data.role !== 'Admin' ) 
            {
                alert('Your are not authorize for operating Admin Control');
                return ;
            }
            Axios.post(window.$domain + 'api/Users/GetUserDatailsId/'+ resp.data.id )
                .then(
                    resp=>
                    {
                        
                        Axios.post(window.$domain + 'api/UserDetails/UpdateLastLogin/'+ resp.data )
                        .then(
                            resp=>
                            {
                                alert('You are logged in successfully')
                            });
                    });
            var cookies = new Cookie();
            cookies.set('logedInUser', {
                userName: resp.data.userName,
                email: resp.data.email, 
                role: resp.data.role, 
                id: resp.data.id
                }, 
                {
                path: '/',
                maxAge: 3600
              });
              this.setState({login: true});
              this.setState({displayAnimator: false})
        })
        .catch(
            err=>{
                if(err)
                alert(err.message + ': Check Internet Connection or Contact Database Admin');
                this.setState({displayAnimator: false});
            });
    }
    componentDidMount(){
        var cookies = new Cookie();
        if(cookies.get('logedInUser') !== undefined && this.state.login === false){
            this.setState({login: true});
        }
    }
    render(){
        return (
            <div className="container mt-4" style={{width: "80%"}}>
                {this.state.login? <Redirect to='/'/>:''}
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        
                        <div className="col-lg-12 login-title ">
                            
                            <p style={{textAlign: 'center'}}>
                                <i className="fa fa-key" aria-hidden="true"></i> 
                                -Login
                            </p>
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit>
                                    <div className="form-group">
                                        <label className="form-control-label">UserName</label>
                                        <input onChange={event=> this.setState({user: event.target.value})} type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">Password</label>
                                        <input onChange={event=> this.setState({password: event.target.value})} type="password" className="form-control" ></input>
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        {
                                            this.state.displayAnimator ? <Spinner animation="grow" />
                                            : <div className="col-lg-6 login-btn login-button">
                                                <button onClick={this.loginUser} className="btn btn-outline-primary btn-light" style={{alignContent: "center"}}>
                                                    Login
                                                </button>
                                            </div>
                                        }
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Login;