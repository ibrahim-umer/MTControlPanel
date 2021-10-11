import { Component } from "react";
import React from 'react'
import AdminLayout from '../../../AdminLayout/AdminLayout'
import TbInputControl from '../UI/TbInputControl'
import axios from "axios";
import { Redirect } from "react-router";
import Cookie from 'universal-cookie';

class AttachWithNewScheme extends Component{
    constructor(props) {
        super(props);
        this.state = {
            AccProtoType:{
                "id": 0,
                "amountPayable": 0,
                "monthlyInstalment": 0,
                "isAccClosed": false,
                "userid": 0,
                "mtServiceId": 0,
                "accPaymentDetails": null
            },
            MTServices: null,
            redirect: false,
            isLogin: true
        };
        this.amountInputRef = React.createRef();
        this.ReadyUser = this.ReadyUser.bind(this);
    }

    ReadyUser=(event)=>{
        if(event.target.name === 'GetAmountPayable')
        {
            this.TotalAmountPayable(event.target)
        }
        else if(event.target.name === 'GetMonthlyInstallment'){
            this.MonthlyInstallment(event.target)
        }
    }

    TotalAmountPayable = target =>{
        this.setState({AccProtoType: 
            {
                "id": 0,
                "amountPayable": target.value,
                "monthlyInstalment": this.state.AccProtoType.monthlyInstalment,
                "isAccClosed": false,
                "userid": this.state.AccProtoType.userid,
                "mtServiceId": this.state.AccProtoType.mtServiceId,
                "accPaymentDetails": null
            }
        })
    }

    MonthlyInstallment = target=>{
        this.setState({AccProtoType: 
            {
                "id": 0,
                "amountPayable": this.state.AccProtoType.amountPayable,
                "monthlyInstalment": target.value,
                "isAccClosed": false,
                "userid": this.state.AccProtoType.userid,
                "mtServiceId":this.state.AccProtoType.mtServiceId,
                "accPaymentDetails": null
            }
        })
    }

    PostData=()=>{
        axios.get(window.$domain + 'api/Accounts/GetAccountbyUserId/' + this.state.AccProtoType.userid)
        .then(
            resp=> {
                var duplicated = false;
                resp.data.map(acc=>{
                    if(acc.mtServiceId === this.state.AccProtoType.mtServiceId)
                    {
                        duplicated = true;
                        alert('Sorry! You are not allow to make duplication')
                    }
                });
                if(!duplicated)
                {
                    axios.post(window.$domain + 'api/Accounts',this.state.AccProtoType)
                        .then(resp=> {
                            this.setState({redirect: true});
                        }). catch(
                            resp=> alert(resp.data.message)
                        );
                }
            }
        ). catch(
            resp=> alert(resp.data.message)
        );
    }

    MTServiceSelection = (event) => {
        if(event.target.value !== 'Please Select Scheme/Product'){
            this.state.MTServices.map(
                mtService=>{
                    if(mtService.name === event.target.value){
                        this.setState({AccProtoType: 
                            {
                                "id": 0,
                                "amountPayable": this.state.AccProtoType.amountPayable,
                                "monthlyInstalment": this.state.AccProtoType.monthlyInstalment,
                                "isAccClosed": false,
                                "userid": this.state.AccProtoType.userid,
                                "mtServiceId": mtService.id,
                                "accPaymentDetails": null
                            }
                        })
                    }
                }
            )
        }
    }

    componentDidMount(){
        if(this.state.AccProtoType.userid === 0){
            this.setState({AccProtoType: {
                "id": 0,
                "amountPayable": this.state.AccProtoType.amountPayable,
                "monthlyInstalment": this.state.AccProtoType.monthlyInstalment,
                "isAccClosed": false,
                "userid": this.props.match.params.id,
                "mtServiceId": this.state.AccProtoType.mtServiceId,
                "accPaymentDetails": null
            }})
        }
        if(this.state.MTServices === null){
            axios.get(window.$domain + 'api/MTServices').
            then(resp=>{
                this.setState({MTServices: resp.data});
            });
        }
        var cookies = new Cookie();
        if(cookies.get('logedInUser') === undefined)
        {
            this.setState({isLogin: false});
        }
    }

    render(){
        return(
            <AdminLayout>
                {this.state.isLogin?'':<Redirect to='/login'/>}
                {this.state.redirect? <Redirect to='/manageuser'/>: ''}
                <div className='jumbotron'>
                    <div className='container-fluid'>
                        <h5>Add User to New Scheme</h5>
                        <hr/> 
                        <h6>Please Select Scheme/Product</h6>
                        <hr/>
                            <select class="form-select form-select-lg" onChange={this.MTServiceSelection} aria-label=".form-select-sm example">
                            <option selected>Please Select Scheme/Product</option>
                                {
                                    this.state.MTServices?
                                    this.state.MTServices.map(MTService=>{
                                        return <option key={MTService.id}>{MTService.name}</option>
                                    }):
                                    <option selected>Wait We are trying to Load Your Providing Services</option>
                                }
                            </select>
                    </div>
                    <hr/>
                    <div class="form-group ">
                        <label for='GetAmountPayable'>Total Amount Payable:</label>
                        <input ref={this.amountInputRef} type='number' class="form-control" onChange={this.ReadyUser} name='GetAmountPayable'/>
                    </div>
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Monthly Installment'} inutType={'number'} ctrlName={'GetMonthlyInstallment'} />
                    <button className="btn btn-success" onClick={this.PostData}>Add User to this Sceme</button>
                </div>
            </AdminLayout>
        );
    }
}


export default AttachWithNewScheme;