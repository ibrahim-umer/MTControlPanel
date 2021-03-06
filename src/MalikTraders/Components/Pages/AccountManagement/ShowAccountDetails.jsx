import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import AdminLayout from "../../AdminLayout/AdminLayout";
import PaymentDetails from "./DisplayPaymentDetails/PaymentDetails";
import AccountCard from "./UI/AccountCard";
import Axios from "axios"
import Cookie from 'universal-cookie/es6';
import { Spinner } from 'react-bootstrap';
import {goBack} from '../../../Assets/StaticFunc/UI';
class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Accounts:null,
            Schemes: null,
            DisplayAcc: null,
            AccId: 0,
            gotoHistoryPaymentRedirect: null,
            isLogin: true
        }
    }

    gotoHistoryPaymentRedirectHandler=(AccId)=>{
        this.setState({gotoHistoryPaymentRedirect: {
            AccId: AccId,
            redir: true 
        }})
    }
    AccountEnableHandler =(AccId)=>{
        
        var ClosingDescription = window.prompt("what is the reason of Enabling Account");
        if(ClosingDescription !== null)
        if(window.confirm('Attention Please! ' + 'Opration Defination: Are you sure you want to --Enable-- this account'))
        {
            Axios.put(window.$domain + 'api/Accounts/DisableAndEnableHandler/' + AccId + '?ClosingDescription=' + ClosingDescription)
                .then(resp=> {
                    
                });
            this.setState({Accounts: null});
        }
    }
    AccountDisableHandler =(AccId)=>{
        
        var ClosingDescription = window.prompt("what is the reason of Disabling Account");
        if(ClosingDescription !== null)
        if(window.confirm('Attention Please! ' + 'Opration Defination: Are you sure you want to disable this account'))
        {
            Axios.put(window.$domain + 'api/Accounts/DisableAndEnableHandler/' + AccId + '?ClosingDescription=' + ClosingDescription)
                .then(resp=> {
                })
                this.setState({Accounts: null});
        }
    }

    componentDidMount(){
        if(this.state.Accounts === null){
            axios.get(window.$domain + 'api/Accounts/GetAccountbyUserId/' + this.props.match.params.id)
            .then(
                resp=>{
                    this.setState({Accounts: resp.data});
                }
            )
            axios.get(window.$domain + 'api/MTServices')
            .then(
                resp=>{
                    this.setState({Schemes: resp.data});
                }
            )
            
        }
        var cookies = new Cookie();
        if(cookies.get('logedInUser') === undefined)
        {
            this.setState({isLogin: false});
        }
    }
    componentDidUpdate(){
        if(this.state.Accounts === null){
            axios.get(window.$domain + 'api/Accounts/GetAccountbyUserId/' + this.props.match.params.id)
            .then(
                resp=>{
                    this.setState({Accounts: resp.data});
                }
            )
            axios.get(window.$domain + 'api/MTServices')
            .then(
                resp=>{
                    this.setState({Schemes: resp.data});
                }
            )
        }
    }

    paymentDisplayHandler = (Accid)=>{
        this.state.Accounts.map(
            Account => {
                if(Account.id === Accid ){
                    this.setState({DisplayAcc: Account.accPaymentDetails});
                    this.setState({AccId: Accid})
                }
            }
        )
    }
    render(){
        return(
            <AdminLayout>
                {this.state.isLogin?'':<Redirect to='/login'/>}
                {this.state.gotoHistoryPaymentRedirect=== null? '':<Redirect to={'/Accounts/' + this.state.gotoHistoryPaymentRedirect.AccId + '/Payment'} /> }
                <div className='jumbotron mt-3'>
                {goBack(this.props.history)}
                    <div className='row'>
                        <div className='col-md-3'>
                            <h5 style={{textAlign: 'center'}}>Participated Schemes<i  className="fa fa-magic " aria-hidden="true"></i></h5>
                            {
                                this.state.Schemes !== null && this.state.Accounts !== null ?this.state.Accounts.map(
                                    Account => this.state.Schemes.map(
                                        Scheme=> Scheme.id === Account.mtServiceId ? <AccountCard 
                                                                                        schemeName={Scheme.name} 
                                                                                        desc={Scheme.details} 
                                                                                        AccId={Account.id} 
                                                                                        paymentDisplayHandler ={this.paymentDisplayHandler}
                                                                                        gotoPaymentHistory= {this.gotoHistoryPaymentRedirectHandler}
                                                                                        isAccClosed= {Account.isAccClosed}
                                                                                        disableAcc={this.AccountDisableHandler}
                                                                                        closingReason={Account.closingDescription}
                                                                                        enableAcc={this.AccountEnableHandler}/>: ''
                                    ) 
                                ):<div className='m-5'><Spinner animation="grow" /></div>
                            }
                        </div>
                        <div className='col-md-9'>
                            <h5 style={{textAlign: 'center'}}>Account Payment Details</h5>
                            {
                                this.state.DisplayAcc? 
                                <PaymentDetails peymentHistory={this.state.DisplayAcc} AccId = {this.state.AccId}/>
                                :'Please select a Scheme'
                            }
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}
export default AccountDetails;

