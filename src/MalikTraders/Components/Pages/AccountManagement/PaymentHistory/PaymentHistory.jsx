import React,{ Component } from "react";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import axios from 'axios';
import Cookie from 'universal-cookie';
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ReactToPrint from 'react-to-print';

class PaymentHistory extends Component{
   
    constructor(props) {
        super(props);
        this.state =  {
            historyList: [],
            isLogin: true,
            goneToPrint: false,
            searchQuery: {
                startDate: null,
                endDate: null
            },
            queryExecuted: false
        };
        this.queryDataLoader = this.queryDataLoader.bind(this);
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
                    );
                }
            ).catch(
                err=> {
                    console.log(err);
                }
            )
        }
        var cookies = new Cookie();
        if(cookies.get('logedInUser') === undefined)
        {
            this.setState({isLogin: false});
        }
    }
    printModeHandler = ()=>{
        this.setState({goneToPrint: !this.state.goneToPrint});
    }
    searchByDateTime = (event)=>{
        if(event.target.name === 'Start-Date'){
            this.setState({searchQuery: {
                startDate: new Date(event.target.value).toLocaleDateString(),
                endDate: this.state.searchQuery.endDate
            }});
        }
        if(event.target.name === 'End-Date'){
            this.setState({searchQuery: {
                startDate: this.state.searchQuery.startDate,
                endDate: new Date(event.target.value).toLocaleDateString()
            }});
        }
    }
    queryDataLoader(){
        
            if(this.state.searchQuery.startDate !== null 
                && this.state.searchQuery.endDate !== null)
            {
                this.setState({historyList: []});
                axios.post(window.$domain + 'api/AccDetails/GetAccountDetailsByGivenMonth/' 
            + this.props.match.params.id 
            + '?StartDate=' + this.state.searchQuery.startDate 
            + '&EndDate=' + this.state.searchQuery.endDate)
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
                        );
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
                {this.state.isLogin?'':<Redirect to='/login'/>}
                {!this.state.goneToPrint?
                <div className="jumbotron container-fluid overflow-auto" >
                    <h2>Payment History</h2>
                    <label for="StartMonth">Start Month:</label>
                    <input className='shadow form-control  ml-1' type="date" id="StartMonth" name="Start-Date"
                    defaultValue = '2021-10' onChange={this.searchByDateTime}></input>
                    <label for="End-Month">End Month:</label>
                    <input className='shadow form-control ml-1' type="date" id="start" name="End-Date"
                      onChange={this.searchByDateTime}></input>
                    <div className='row'>
                    <button className='btn btn-light mt-2'  style={{marginLeft: 'auto', marginRight: '5px'}}
                      onClick={this.queryDataLoader}>Search</button>
                    </div>
                    {
                        this.state.historyList !== null ?
                        <DisplayHistory  
                        paymentHistoryList= {this.state.historyList} 
                        AccID={this.props.match.params.id}
                        isPrintable= {false}
                         />
                        : <Spinner animation="grow" />
                    }
                    <button onClick={()=>this.setState({goneToPrint: true})} className='btn btn-primary'>Print</button>
            </div>
            :<DisplayHistory backToAppMode={this.printModeHandler}  isPrintable= {true}  paymentHistoryList= {this.state.historyList} AccID={this.props.match.params.id} />}
            </AdminLayout>
        )
    }
    
}

export class DisplayHistory extends Component {
    state = {
        redirect: false,
        sum: 0
    }
    componentDidMount(){
        this.updateComponent();
    }
    componentDidUpdate(){
        this.updateComponent();
    }
    updateComponent=()=>{
        if(this.props.paymentHistoryList.length > null && this.state.sum === 0)
        {
            var sum=0;
            this.props.paymentHistoryList.map(payment=>{
                sum=sum+payment.payedAmount;
            })
            this.setState({sum: sum});
        }
    }
    printPage(){
        window.print();
        this.props.backToAppMode();
    }
    render() {
      return (
        <div className='m-2'>
        {
           this.props.isPrintable? <>
            <h4>Total Paid Amount: PKR {this.state.sum}</h4>
            <h5>Scheme ID: {this.props.AccID}</h5>
            </>:''
        }
        <table className='table '>
         <thead>
            <tr >
                <th>Date -- Time</th>
                <th>Payment</th>
                <th>Payment Received By</th>
                {this.props.isPrintable?'':<th>Amount Modification</th>}
            </tr>
        </thead>
          <tbody>
          {this.props.paymentHistoryList?
          this.props.paymentHistoryList.map(payment=>{
                return <tr>
                            <td>{new Date(payment.payDate).toDateString() + ' -- ' + new Date(payment.payDate).toLocaleTimeString() }</td>
                            <td>{payment.payedAmount}</td>
                            <td>{payment.PostedByUser}</td>
                            {this.props.isPrintable?'':<td><Link to={'/account/payment/modification/' + payment.paymentId}>modify</Link></td>}
                    </tr>
                })
                :''}
          </tbody>
        </table>
        {this.props.isPrintable?
        <a onClick={()=>this.printPage()} style={{cursor: 'pointer', color: "white", backgroundColor: 'gray'}} >Print Out</a>:''}
        </div>
      );
    }
  }


export default PaymentHistory;
