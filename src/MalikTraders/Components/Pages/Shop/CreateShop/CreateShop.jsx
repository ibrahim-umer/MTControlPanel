import { Component } from "react";
import { Link } from "react-router-dom";
import TbInput from '../../ProductManager/UI/TbInput';
import Axios from 'axios';
import ShopAdminLayout from "../../../AdminLayout/ShopAdminLayout";
import {Redirect} from 'react-router'
import {goBack} from '../../../../Assets/StaticFunc/UI';
class CreateShop extends Component
{
    state= {
        "id": 1,
        "bankName": "",
        "accountNo": "",
        "isDefaulter": false,
        "currentPayment": 0,
        "userId": this.props.match.params.id,
        redirect: false,
        responce: null
    }
    
    inputHandler=(event)=>{
        var ctrlName = event.target.name;
        var value = event.target.value;
        
        if(ctrlName === 'Bank Name') this.setState({bankName: value})
        else if(ctrlName === 'Account No')this.setState({accountNo: value})
        else if(ctrlName === 'Start Amount')this.setState({currentPayment: value})
    }
    
    submitTransection = ()=>{
        Axios.post(
            window.$domain + 'api/ShopAccounts',
            {
                "id": 0,
                "bankName": this.state.bankName,
                "accountNo": this.state.accountNo ,
                "isDefaulter": this.state.isDefaulter,
                "currentPayment": 0,
                "userId": this.state.userId
            })
        .then(response=>{
            if(this.state.currentPayment > 0){
                Axios.post(
                    window.$domain + 'api/ShopAccountPaymentHistories',
                    {
                        "id": 0,
                        "paymentTitle": 'Add Starting Amount',
                        "amountRecived": this.state.currentPayment,
                        "amountPaid": 0,
                        "paymentDescription": 'This is shop Account Starting Transaction',
                        "transectionDate": new Date(),
                        "shopAccountId": response.data.id
                    }).catch(
                        err=>
                        {
                            alert(err.response.data);
                        });
            }
            else if(this.state.currentPayment < 0){
                Axios.post(
                    window.$domain + 'api/ShopAccountPaymentHistories',
                    {
                        "id": 0,
                        "paymentTitle": 'Add Starting Amount',
                        "amountRecived": 0,
                        "amountPaid": this.state.currentPayment,
                        "paymentDescription": 'This is shop Account Starting Transaction',
                        "transectionDate": new Date(),
                        "shopAccountId": response.data.id
                    }
                    )
            .catch(
                err=>
                {
                    alert(err.response.data);
                });
            }
            this.setState({responce: response.data});
            this.setState({redirect: true});
        })   
        .catch(
            err=>
            {
                alert(err);
            });
    }
    

    render(){
            return <ShopAdminLayout>
                <div className='jumbotron'>
                {goBack(this.props.history)}
                    {this.state.responce? 
                        this.state.redirect? 
                            <Redirect to={'/user/'+ this.props.match.params.id + '/shop'} /> 
                            :'' :'' }
                <h3 style={{textAlign: 'center'}}>Create Shop Account</h3>
                <TbInput DataInputHandler={this.inputHandler} Name='Bank Name' type='text' />
                <TbInput DataInputHandler={this.inputHandler} Name='Account No' type='text' />
                <TbInput DataInputHandler={this.inputHandler} Name='Start Amount' type='Number' />
                <Link className='btn btn-success' onClick={this.submitTransection}>Submit</Link>
                </div>
            </ShopAdminLayout>
    }
}
export default CreateShop;