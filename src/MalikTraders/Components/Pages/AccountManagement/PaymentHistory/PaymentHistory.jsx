import { Component } from "react";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import axios from 'axios'
import Cookie from 'universal-cookie'
import { Link } from "react-router-dom";
import AddNewPayment from "../../UserManagement/AddNewPayment/AddNewPayment";
import { Spinner } from "react-bootstrap";

class PaymentHistory extends Component{
   
    constructor(props) {
        super(props);
        this.state =  {
            historyList: []
        };
    }
    componentDidMount(){
        if(this.state.historyList.length === 0)
        {
            axios.get(window.$domain + 'api/AccDetails/GetAccDetailsbyAccountId/' + this.props.match.params.id)
            .then(
                resp=>{
                        resp.data.map(
                            payment => {
                                axios.get(window.$domain + 'api/Users/' + payment.postedByUserId).then(
                                    user=>{
                                        var arrayHistory = [];
                                        arrayHistory = this.state.historyList;
                                        arrayHistory.push(
                                            {
                                                payDate: payment.payingDate, 
                                                paymentId: payment.id,
                                                payedAmount: payment.payedAmount,
                                                PostedByUser: user.data.userName
                                            });
                                        this.setState({historyList: arrayHistory});
                                    }
                                )
                            }
                    )
                }
            ).catch(
                err=> {
                    console.log(err);
                }
            )
        }
    }

     render(){
        return(
            <AdminLayout>
                <div className="jumbotron container-fluid overflow-auto">
                    <h2>Payment History</h2>
                <table className="table shadow table-bordered">
                    <thead>
                        <tr >
                            <th>Date -- Time</th>
                            <th>Payment</th>
                            <th>Payment Received By</th>
                            <th>Amount Modification</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                             this.state.historyList !== null ?
                             this.state.historyList.map(payment=>{
                                return <tr>
                                            <td>{new Date(payment.payDate).toDateString() + ' -- ' + new Date(payment.payDate).toLocaleTimeString() }</td>
                                            <td>{payment.payedAmount}</td>
                                            <td>{payment.PostedByUser}</td>
                                            <td><Link to={'/account/payment/modification/' + payment.paymentId}>modify</Link></td>
                                    </tr>
                             }): <Spinner animation="grow" />
                         }
                    </tbody>
                </table>
                
            </div>
            </AdminLayout>
        )
    }
    
}

export default PaymentHistory;
