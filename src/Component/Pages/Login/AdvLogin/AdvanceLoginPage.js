import './Adv.css';
import SigninGoogle from '../../../../Firebase/Auth/GoogleAuth'
import SigninFacebook from '../../../../Firebase/Auth/Facebook'
import * as emailpassAuth from '../../../../Firebase/Auth/EmailPasswordAuth'
import { Component } from 'react';
import * as Actions from '../../../../Store/User/Actions'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';

class AdvLogin extends Component {
    state =  {
        user: {
            email: "",
            displayName: "Umer Ibrahim",
            pictureURL: "",
            loggedinStatus: false
        },
        redirectState: false,
        Password: ""
    }

    componentDidMount(){
        const cookies = new Cookies();
        const storedCookie = cookies.get('user');
        if(storedCookie.loggedinStatus){
            this.setState({redirectState: true})
        }
    }

    inputEmailHandler=(e)=>{
        this.setState({ user:
            {
                email: e.target.value,
                displayName: this.state.user.displayName,
                pictureURL: "",
                loggedinStatus: true
            },
        });
        console.log(this.state)
    }

    inputPasswordHandler=(e)=>{
        this.setState({Password: e.target.value})
    }

    loginByEmailandPassword(){
        this.props.login(this.state.user);
        
        var result = emailpassAuth.SigninByEmaiPass(this.state.user.email,this.state.Password);
        if(result !== null){
            result.then(result=>{
                this.setState({redirectState: true})
            })
        }
    }

    loginWithGoogle(){
        
    }

    render(){
        
        return (
            <div class="container">
                {
                    this.state.redirectState ? 
                    <Redirect to="/" />:
                    null
                }
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form class="user">
                                                <div class="form-group">
                                                    <input onChange={this.inputEmailHandler} type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                                </div>
                                                <div class="form-group">
                                                    <input onChange={this.inputPasswordHandler} type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <a onClick={() => this.loginByEmailandPassword()} class="btn btn-primary btn-user btn-block">
                                                    Login
                                                </a>
                                                <hr/>
                                                    <a onClick={() => SigninGoogle()} class="btn btn-google btn-user btn-block">
                                                        <i class="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                    <a onClick={() => SigninFacebook()} class="btn btn-facebook btn-user btn-block">
                                                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                                <hr />
                                                <div class="text-center">
                                                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                                                </div>
                                                <div class="text-center">
                                                    <a class="small" href="register.html">Create an Account!</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

const mapStatetoProps = state => {
    return{
        user: state.loggedinUser
    }
}

const dispatchActions = dispatch =>{
    return {
        login: user => dispatch(Actions.Sign_User(user))
    }  
}

export default connect(mapStatetoProps,dispatchActions)(AdvLogin);