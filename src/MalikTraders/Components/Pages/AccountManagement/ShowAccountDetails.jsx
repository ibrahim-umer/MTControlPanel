import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import AdminLayout from "../../AdminLayout/AdminLayout";
import PaymentDetails from "./DisplayPaymentDetails/PaymentDetails";
import AccountCard from "./UI/AccountCard";

class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Accounts:null,
            Schemes: null,
            DisplayAcc: null,
            AccId: 0,
            gotoHistoryPaymentRedirect: null
        }
    }
    gotoHistoryPaymentRedirectHandler=(AccId)=>{
        this.setState({gotoHistoryPaymentRedirect: {
            AccId: AccId,
            redir: true 
        }})
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
        console.log(this.props.match.params.id)
        return(
            <AdminLayout>
                {this.state.gotoHistoryPaymentRedirect=== null? '':<Redirect to={'/Accounts/' + this.state.gotoHistoryPaymentRedirect.AccId + '/Payment'} /> }
                <div className='jumbotron mt-3'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <h5 style={{textAlign: 'center'}}>Participated Schemes</h5>
                            {
                                this.state.Schemes !== null && this.state.Accounts !== null ?this.state.Accounts.map(
                                    Account => this.state.Schemes.map(
                                        Scheme=> Scheme.id === Account.mtServiceId ? <AccountCard 
                                                                                        schemeName={Scheme.name} 
                                                                                        desc={Scheme.details} 
                                                                                        AccId={Account.id} 
                                                                                        paymentDisplayHandler ={this.paymentDisplayHandler}
                                                                                        gotoPaymentHistory= {this.gotoHistoryPaymentRedirectHandler}/>: ''
                                    ) 
                                ): ''
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
            </Ad