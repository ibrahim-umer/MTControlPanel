import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import TbInputControl from "../UI/TbInputControl";
import Cookie from 'universal-cookie';

class AddNewPayment extends Component{
    state = {
        amount: 0,
        redirect: false
    }
    ReadyUser = event =>{
        if(event.target.value > 0)
            this.setState({amount: event.target.value})
    }
    postPaymnet= ()=>{
        var cookies = new Cookie();
        axios.post(
            window.$domain + 'api/AccDetails',
            {
                "id": 0,
                "payedAmount": this.state.amount,
                "payingDate": "2021-09-27T22:15:41.611Z",
                "accId": this.props.Accid,
                "postedByUserId": cookies.get('logedInUser').id
            }
        ).then(
            resp=>{
                this.setState({redirect: true});
            }
        )
    }
    render(){
        return(
                <div className="jumbotron mt-3">
                    {
                        this.state.redirect ? <Redirect to={'/Accounts/'+this.props.Accid+'/Payment'} />: ''
                    }
                    <h3>Add Payment</h3>
                    <hr/>
                    <h5>Please fill this form carefully, This transection is ir-revercible</h5>
                    <hr/>
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Payment'} inutType={'number'} ctrlName={'Add Payment'} />
                    <button onClick={this.postPaymnet} className='btn btn-success'>Post Amount</button>
                </div>
        )
    }
}
export default AddNewPayment;