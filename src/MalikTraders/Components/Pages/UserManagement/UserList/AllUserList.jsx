import { Component } from "react";
import Axios from "axios"
import {Link} from 'react-router-dom'

import Styles from './AllUserListStyles.module.css';
import { Spinner } from 'react-bootstrap';

class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userList: [],
          shopAcc: []
        };
    this.LoadUserList = this.LoadUserList.bind(this);
    }

    LoadUserList=(event)=>{
        if(event === undefined)
        Axios.get(window.$domain + 'api/Users').then(
            resp=>{
                this.setState({userList: []});
                this.setState({userList: resp.data});
                resp.data.map(
                    userResp=>{
                        Axios.get(window.$domain + 'api/ShopAccounts/ShopAccountExistsByUserId/' + userResp.id)
                        .then(accResp=>{  
                            var newArray = this.state.shopAcc;
                            newArray.push({userId: userResp.id,isAcc: accResp.data});
                            this.setState({shopAcc: newArray});
                        })
                        .catch(resp=>resp.data.message); 
                    }
                )
            }
        ).catch(
            err=>{
                alert('Page:manageuser =>'+ err)
            }
        )
        else if(event.target.name === 'SearchByCnic' && event.target.value !== '' ){
            Axios.get(window.$domain + 'api/Users/SearchUserbyCNIC/' + event.target.value).
            then(
                resp=>{
                    this.setState({userList: resp.data});
                }
            ).catch(
                err=>{
                    alert('Page: Manage User =>'+err)
                }
            )
        }
        else if(event.target.name === 'SearchByName' && event.target.value !== ''){
            Axios.get(window.$domain + 'api/Users/SearchUserbyName/' + event.target.value).
            then(
                resp=>{
                    this.setState({userList: resp.data});
                }
            ).catch(
                err=>{
                    alert('Page: Manage User =>'+err)
                }
            )
        }
        else if(event.target.name === 'SearchByScheme' && event.target.value !== ''){
            Axios.get(window.$domain + 'api/Users/SearchUserbyUserSchemeID/' + event.target.value).
            then(
                resp=>{
                    this.setState({userList: resp.data});
                }
            ).catch(
                err=>{
                    alert('Page: Manage User =>'+err)
                }
            )
        }
    }
    UserEnableandDisableHandler = (userId)=>
    {
        if(window.confirm('Attention Please! ' + 'Opration Defination: If Your User is Enabled turn Disabled if Disabled turn Enabled.'))
        {
            Axios.post(window.$domain + 'api/Users/UserAccountEnableandDisableHandler/' + userId)
                .then(resp=> {
                    this.LoadUserList();
                })
        }
    }

    componentDidMount(){
        if(this.state.userList.length === 0)
        this.LoadUserList();
        
    }
    getAccState=userId=>{
        var is= null;
       for(let  i= 0;i<this.state.shopAcc.length;i++){
            if(this.state.shopAcc[i].userId === userId)
            {
                is=this.state.shopAcc[i].isAcc;
                break;
            }
       } 
       return is;
    }
    render(){
        return(
            <div className="jumbotron container-fluid overflow-auto">
                <h3>Search User <i  className="fa fa-search " aria-hidden="true"></i></h3>
               <div className='row ml-1 border border-dark shadow' >
                    <div className="form-group ml-1">
                        <label><sub>by</sub>CNIC Number:</label>
                        <input  type='text' class="form-control shadow" onChange={this.LoadUserList} name='SearchByCnic'/>
                    </div>
                    <div className="form-group ml-1">
                        <label ><sub>by</sub>Name:</label>
                        <input  type='text' className="form-control shadow" onChange={this.LoadUserList} name='SearchByName'/>
                    </div>
                    <div className="form-group ml-1">
                        <label ><sub>by</sub>Scheme ID:</label>
                        <input  type='number' className="form-control shadow" onChange={this.LoadUserList} name='SearchByScheme'/>
                    </div>
               </div>
               <h3>Users <i  className={"fa fa-users " + Styles.zoom} aria-hidden="true"></i></h3>
                <div className='row shadow overflow-auto m-1'>
                <table className="table  table-bordered ">
                    <thead>
                        <tr >
                            <th>System Id</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Accounts Details</th>
                            <th>Add to new Scheme</th>
                            <th>Shop Acc.</th>
                            <th>Gender</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>CNIC</th>
                            <th >Last Login (DayName/Month/Day/Year) </th>
                            <th>Registration Date (DayName/Month/Day/Year)</th>
                            <th>User Enabled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userList.length > 0 ?
                            this.state.userList.map(user=>{
                                var isAcc=this.getAccState(user.id);
                                
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.role}</td>
                                    <td><Link to={'/user/'+ user.id}>{user.name}</Link></td>
                                    <td>
                                        {user.role==='admin'?'':<Link to={'/ShowSchemeAccountDetails/'+ user.id} >Show</Link>}
                                    </td>
                                    <td>
                                        {user.role==='admin'?'':<Link to={'/User/'+ user.id + '/AddtoNewScheme'} >Add</Link>}
                                    </td>
                                    <td>
                                        {user.role !== 'admin' ? isAcc  ? 
                                        <Link to={'/user/'+ user.id+'/shop'} >Go</Link>:
                                        <Link to={'/user/' + user.id + '/create-shop-account'}  >Create</Link>
                                        :''}
                                    </td>
                                    <td>{user.gender}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.cnic}</td>
                                    <td>{new Date(user.lastLogin).toDateString() + ' ' 
                                     + new Date(user.lastLogin).toLocaleTimeString() }</td>
                                    <td>{new Date(user.registration_Date).toDateString()}</td>
                                    <td onClick={()=> {if(user.role!=='admin')this.UserEnableandDisableHandler(user.id)}}>
                                        {user.isUserDisabled? 
                                        <i  class={"fa fa-lock " + Styles.zoom} aria-hidden="true"></i> :
                                        <i  class={"fa fa-check " + Styles.zoom} aria-hidden="true"></i>}
                                    </td>
                                </tr>
                            }): <Spinner animation="grow"  /> 
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default UserList;