import { Component } from "react";
import { Link } from "react-router-dom";
import TbInput from '../../ProductManager/UI/TbInput';
import TransectionTypeCheckBoxs from './TransectionTypeCheckBoxs';
import Axios from 'axios';
import ShopAdminLayout from "../../../AdminLayout/ShopAdminLayout";
import { Redirect } from 'react-router'
 
class NewTransection extends Component
{
    state= {
            "id": 0,
            "paymentTitle": "",
            "amountRecived": 0,
            "amountPaid": 0,
            "paymentDescription": "",
            "transectionDate": "2021-09-15T15:12:00",
            "shopAccountId": this.props.match.params.shopId,
            't_Type': 'receive',
            redirectToBack: false
        }
    
    inputHandler=(event)=>{
        var ctrlName = event.target.name;
        var value = event.target.value;
        
        if(ctrlName === 'Transection Title') this.setState({paymentTitle: value})
        else if(ctrlName === 'Receiving Amount')this.setState({amountRecived: value})
        else if(ctrlName === 'Paid Amount')this.setState({amountPaid: value})
        else if(ctrlName === 'Transection Description')this.setState({paymentDescription: value})
        else if(ctrlName === 'Transection Date Time' )this.setState({transectionDate: value})
    }
    
    submitTransection = ()=>{
        if(this.state.t_Type === 'pay'){
            Axios.post(
                window.$domain + 'api/ShopAccountPaymentHistories',
                {
                    "id": 0,
                    "paymentTitle": this.state.paymentTitle,
                    "amountRecived": 0,
                    "amountPaid": this.state.amountPaid,
                    "paymentDescription": this.state.paymentDescription,
                    "transectionDate": this.state.transectionDate,
                    "shopAccountId": this.state.shopAccountId
                  }
                ).then(resp=>{
                    this.setState({redirectToBack: true});
                })
                .catch(
                    err=>
                    {
                        alert(err.response.data);
                    });
        }
        else if(this.state.t_Type === 'receive'){
            Axios.post(window.$domain + 'api/ShopAccountPaymentHistories',
                {
                    "id": 0,
                    "paymentTitle": this.state.paymentTitle,
                    "amountRecived": this.state.amountRecived,
                    "amountPaid": 0,
                    "paymentDescription": this.state.paymentDescription,
                    "transectionDate": this.state.transectionDate,
                    "shopAccountId": this.props.match.params.shopId
                  }).then(resp=>{
                    this.setState({redirectToBack: true});
                })
                .catch(
                    err=>
                    {
                        alert(err.response.data);
                    });
                }
    }
    setT_Type = (event)=>{
        var ctrlName = event.target.id;
        if(ctrlName === 'pay') this.setState({t_Type: 'pay'})
        else if(ctrlName === 'receive') this.setState({t_Type: 'receive'})
    }

    render(){
            return <ShopAdminLayout>
                {this.state.redirectToBack? <Redirect to={'/user/'+ this.props.match.params.id +'/shop'} />:''}
                <div className='jumbotron'>
                <h3 style={{textAlign: 'center'}}>Create Transactions</h3>
                <TransectionTypeCheckBoxs t_State={this.setT_Type} />
                <TbInput DataInputHandler={this.inputHandler} Name='Transection Title' type='text' />
                <TbInput DataInputHandler={this.inputHandler} Name='Receiving Amount' type='Number' />
                <TbInput DataInputHandler={this.inputHandler} Name='Paid Amount' type='Number' />
                <div class="form-group">
                    <label for="comment">Transection Description:</label>
                    <textarea onChange={this.inputHandler} class="form-control" rows="2" name='Transection Description' id="comment"></textarea>
                </div>
                <TbInput DataInputHandler={this.inputHandler} Name='Transection Date Time' type='datetime-local'   />
                <Link className='btn btn-success' onClick={this.submitTransection}>Submit</Link>
            </div>
            </ShopAdminLayout>
    }
}
export default NewTransection;