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
            "role": "user",
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
            MTServices:[],
            redirect: false
        };
        this.amountInputRef = React.createRef();
        this.ReadyUser = this.ReadyUser.bind(this);
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
    
    CreatNewUser = ()=>{
        axios.post(
                window.$domain + 'api/Users',
                {
                    "id": 0,
                    "email": this.state.email,
                    "userName": this.state.userName,
                    "password": this.state.password,
                    "role": this.state.role,
                    "userDetail": {
                        "id": 0,
                        "name": this.state.userDetails.name,
                        "cnic": this.state.userDetails.cnic,
                        "phoneNumber": this.state.userDetails.phoneNumber,
                        "address": this.state.userDetails.address,
                        "gender": this.state.userDetails.gender,
                    }
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
                    <button onClick={this.CreatNewUser} className='btn btn-secondary'>Create</button>
                </div>
                
            </AdminLayout>
        )
    }
}

export default CreateNewUser;