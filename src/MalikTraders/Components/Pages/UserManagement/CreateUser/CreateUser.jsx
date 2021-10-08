import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import TbInputControl from "../UI/TbInputControl";

class CreateNewUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            "id": 0,
            "email": "",
            "role": "",
            "userName": "",
            "password": "",
            "userDetails": {
              "id": 0,
              "name": "",
              "cnic": "",
              "phoneNumber": "",
              "address": "",
              "gender": "",
              "registration_Date": ""
            },
            "accounts": [
              {
                "id": 0,
                "accNumber": "",
                "bankName": "",
                "amountPayable": 0,
                "monthlyInstalment": 0,
                "mtServiceId": 0,
                "isAccClosed": false,
              }
            ],
            MTServices:[],
            redirect: false
        };
        this.amountInputRef = React.createRef();
        this.ReadyUser = this.ReadyUser.bind(this);
    }
    componentDidMount(){
        if(this.state.MTServices.length === 0){
            axios.get(window.$domain + 'api/MTServices').
            then(MTService=>{
                var forModificationState = this.state.MTServices;
                forModificationState.push(MTService.data);
                console.log(forModificationState)
                this.setState({MTServices: forModificationState});
            });
            
        }
        console.log(this.state.MTServices)
    }
    ReadyUser=(event)=>{
        if(event.target.name === 'GetFullName'){
            this.setFullName(event.target)
        }
        else if(event.target.name === 'GetUserName'){
            this.setUserName(event.target)
        }
        else if(event.target.name === 'GetGender'){
            this.setGender(event.target)
        }
        else if(event.target.name === 'GetEmail'){
            this.setEmail(event.target)
        }
        else if(event.target.name === 'GetPassword'){
            this.setPassword(event.target)
        }
        else if(event.target.name === 'GetCNIC'){
            this.setCNIC(event.target)
        }
        else if(event.target.name === 'GetAddress'){
            this.setAddress(event.target)
        }
        else if(event.target.name === 'GetPhone'){
            this.setPhoneNumber(event.target)
        }
        else if(event.target.name === 'GetAccountNumer'){
            this.setAccountNumber(event.target)
        }
        else if(event.target.name === 'GetBankName'){
            this.setBankName(event.target)
        }
        else if(event.target.name === 'GetMonthlyInstallment'){
            this.setMonthlyInstallment(event.target)
        }
    }
    setAccountNumber = (target)=>{
        var newAccountState = [];
        var accountData = {
            "id": 0,
            "accNumber": target.value,
            "bankName": this.state.accounts[0].bankName,
            "amountPayable": this.state.accounts[0].amountPayable,
            "monthlyInstalment": this.state.accounts[0].monthlyInstalment,
            "mtServiceId":this.state.accounts[0].mtServiceId,
            "isAccClosed": false,
        }
        newAccountState.push(accountData);
        this.setState({accounts: newAccountState})
    }
    setBankName = (target)=>{
        var newAccountState = [];
        var accountData = {
            "id": 0,
            "accNumber": this.state.accounts[0].accNumber ,
            "bankName": target.value,
            "amountPayable": this.state.accounts[0].amountPayable,
            "monthlyInstalment": this.state.accounts[0].monthlyInstalment,
            "mtServiceId":this.state.accounts[0].mtServiceId,
            "isAccClosed": false,
        }
        newAccountState.push(accountData);
        this.setState({accounts: newAccountState})
    }
    setMonthlyInstallment = (target)=>{
        var newAccountState = [];
        var accountData = {
            "id": 0,
            "accNumber": this.state.accounts[0].accNumber ,
            "bankName": this.state.accounts[0].bankName ,
            "amountPayable": this.state.accounts[0].amountPayable,
            "monthlyInstalment": target.value,
            "mtServiceId":this.state.accounts[0].mtServiceId,
            "isAccClosed": false,
        }
        newAccountState.push(accountData);
        this.setState({accounts: newAccountState})
    }
    setFullName =(target)=>{
        this.setState({userDetails: {
            "id": 0,
            "name": target.value,
            "cnic": this.state.userDetails.cnic,
            "phoneNumber": this.state.userDetails.phoneNumber,
            "address": this.state.userDetails.address,
            "gender": this.state.userDetails.gender,
            "registration_Date": this.state.userDetails.registration_Date
          }});
        console.log(this.state)
    }
    setGender =(target)=>{
        this.setState({userDetails: {
            "id": 0,
            "name": this.state.userDetails.name,
            "cnic": this.state.userDetails.cnic,
            "phoneNumber": this.state.userDetails.phoneNumber,
            "address": this.state.userDetails.address,
            "gender": target.value,
            "registration_Date": this.state.userDetails.registration_Date
          }});
    }
    setUserName = (target)=>{
        this.setState({userName: target.value});
    }
    setEmail = (target)=>{
        this.setState({email: target.value});
        console.log(this.state)
    }
    setPassword = (target)=>{
        this.setState({password: target.value});
        console.log(this.state)
    }
    setCNIC =(target)=>{
        this.setState({userDetails: {
            "id": 0,
            "name": this.state.userDetails.name,
            "cnic": target.value,
            "phoneNumber": this.state.userDetails.phoneNumber,
            "address": this.state.userDetails.address,
            "gender": this.state.userDetails.gender,
            "registration_Date": this.state.userDetails.registration_Date
          }});
        console.log(this.state)
    }
    setAddress =(target)=>{
        this.setState({userDetails: {
            "id": 0,
            "name": this.state.userDetails.name,
            "cnic": this.state.userDetails.cnic,
            "phoneNumber": this.state.userDetails.phoneNumber,
            "address": target.value,
            "gender": this.state.userDetails.gender,
            "registration_Date": this.state.userDetails.registration_Date
          }});
        console.log(this.state)
    }
    setPhoneNumber =(target)=>{
        this.setState({userDetails: {
            "id": 0,
            "name": this.state.userDetails.name,
            "cnic": this.state.userDetails.cnic,
            "phoneNumber": target.value,
            "address": this.state.userDetails.address,
            "gender": this.state.userDetails.gender,
            "registration_Date": this.state.userDetails.registration_Date
          }});
        console.log(this.state)
    }
    setUserType= (event)=>
    {
        this.setState({role: event.target.value});
    }
    MTServiceSelection = (event)=>{
        alert(event.target.value)
        this.state.MTServices[0].map(
            MTservice=>{
                if(event.target.value === MTservice.name){
                    this.setState({accounts: 
                        [{
                            "id": 0,
                            "accNumber": this.state.accounts[0].accNumber,
                            "bankName": this.state.accounts[0].bankName,
                            "amountPayable": MTservice.amount,
                            "monthlyInstalment": this.state.accounts[0].monthlyInstalment,
                            "mtServiceId": MTservice.id,
                            "isAccClosed": false,
                        }]
                    });
                    this.amountInputRef.current.value = MTservice.amount;
                }
            }
        )
    }
    CreatNewUser = ()=>{
        axios.post(
                window.$domain + 'api/Users',
                {
                    "id": 0,
                    "email": this.state.email,
                    "userName": this.state.userName,
                    "password": this.state.password,
                    "role": this.state.role,
                    "userDetails": {
                        "id": 0,
                        "name": this.state.userDetails.name,
                        "cnic": this.state.userDetails.cnic,
                        "phoneNumber": this.state.userDetails.phoneNumber,
                        "address": this.state.userDetails.address,
                        "gender": this.state.userDetails.gender,
                    },
                    "accounts": [
                        {
                            "id": 0,
                            "accNumber": this.state.accounts[0].accNumber,
                            "bankName": this.state.accounts[0].bankName,
                            "amountPayable": this.state.accounts[0].amountPayable,
                            "monthlyInstalment": this.state.accounts[0].monthlyInstalment,
                            "mtServiceId": this.state.accounts[0].mtServiceId,
                            "isAccClosed": false,
                        }
                    ] 
                }    
            )
        .then(response => this.setState({redirect: true}))
        .catch(
            err=>
            {
                alert(err.response.data);
            }
            );
    }

    render(){
        return(
            <AdminLayout>
            <div className="jumbotron">
                {this.state.redirect?<Redirect to='/manageuser'/>:''}
                <h3>Create New User</h3>
                <hr/>
                <h5>Please Select User Type</h5>
                <select class="form-select form-select-lg" onChange={this.setUserType} aria-label=".form-select-sm example">
                <option selected>user</option>
                <option>worker</option>
                </select>
                <hr/>
                <h5>User Information</h5>
                <hr/>
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Full Name'} inutType={'text'} ctrlName={'GetFullName'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'User Name'} inutType={'text'} ctrlName={'GetUserName'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'E-mail'} inutType={'email'} ctrlName={'GetEmail'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Password'} inutType={'password'} ctrlName={'GetPassword'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Phone Number'} inutType={'text'} ctrlName={'GetPhone'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'CNIC'} inutType={'text'} ctrlName={'GetCNIC'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Complete Address'} inutType={'text'} ctrlName={'GetAddress'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Gender'} inutType={'text'} ctrlName={'GetGender'} />
                <div className='container-fluid'>
                    <h5>Account Information</h5>
                    <hr/> 
                    <h6>Please Select Scheme/Product</h6>
                    <hr/>
                        <select class="form-select form-select-lg" onChange={this.MTServiceSelection} aria-label=".form-select-sm example">
                        <option selected>Please Select Scheme</option>
                            {
                                this.state.MTServices.length > 0?
                                this.state.MTServices[0].map(MTService=>{
                                    return <option key={MTService.id}>{MTService.name}</option>
                                }):
                                <option selected>Wait We are trying to Load Your Providing Services</option>
                            }
                        </select>
                </div>
                <hr/>
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Account Numer'} inutType={'text'} ctrlName={'GetAccountNumer'} />
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Bank Name'} inutType={'text'} ctrlName={'GetBankName'} />
                    <div class="form-group ">
                        <label for='GetAmountPayable'>Total Amount Payable:</label>
                        <input ref={this.amountInputRef} type='text' class="form-control" onChange={this.ReadyUser} name='GetAmountPayable'/>
                    </div>
                    <TbInputControl DataInputHandler={this.ReadyUser} Name={'Monthly Installment'} inutType={'text'} ctrlName={'GetMonthlyInstallment'} />
                    <button className="btn btn-success" onClick={this.CreatNewUser}>Create User</button>
                </div>
            </AdminLayout>
        )
    }
}

export default CreateNewUser;