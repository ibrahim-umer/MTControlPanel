import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import TbInputControl from '../../UserManagement/UI/TbInputControl'


class ModifyPayment extends Component{
    state = {
        amount: 0,
        EntryDateTime: null,
        redirect: false,
        accDetailsId: 0
    }
    ReadyUser = event =>{
        if(event.target.value > 0)
            this.setState({amount: event.target.value})
    }
    postPaymnet= ()=>{
        axios.get(window.$domain + 'api/AccDetails/' + this.props.match.params.id)
        .then(resp=>{
            var data = resp.data;
            data.payedAmount = this.state.amount;
            data.payingDate = this.state.EntryDateTime;
            axios.put(window.$domain + 'api/AccDetails/' + this.props.match.params.id,data)
            .then(modifiedResp=>{
                
                this.setState({accDetailsId: resp.data.accId});
                this.setState({redirect: true});
            });
        })
        .catch(err=>{
            alert(err);
        });
    }
    EntryDateTimeHandler = (event)=>{
        this.setState({EntryDateTime: event.target.value});
    }
    render(){
        return(
                <AdminLayout>
                    <div className="jumbotron mt-3">
                    {
                        this.state.redirect ? <Redirect to={'/Accounts/'+this.state.accDetailsId+'/Payment'} />: ''
                    }
                    <h3>Modify Payment</h3>
                    <hr/>
                        <label for="Entry">Entry Date Time:--</label>
                        <input onChange={this.EntryDateTimeHandler} type="datetime-local" id="Entry" name="Entry"/>
                        <TbInputControl DataInputHandler={this.ReadyUser} Name={'Payment'} inutType={'number'} ctrlName={'Add Payment'} />
                        <button onClick={this.postPaymnet} className='btn btn-success'>Post Amount</button>
                    </div>
                </AdminLayout>
        )
    }
}
export default ModifyPayment;