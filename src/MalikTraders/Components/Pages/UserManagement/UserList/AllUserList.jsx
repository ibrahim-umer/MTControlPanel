import { Component } from "react";
import Axios from "axios"
import {Link} from 'react-router-dom'
class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          userList: []
        };
    this.LoadUserList = this.LoadUserList.bind(this);
    }

     LoadUserList=(event)=>{
        if(event === undefined)
        Axios.get(window.$domain + 'api/Users').then(
            resp=>{
                this.setState({userList: resp.data});
                console.log(resp.data)
            }
        ).catch(
            err=>{
                alert('Page:manageuser =>'+err)
                console.log('Page:manageuser =>'+err)
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
                    alert('Page:manageuser =>'+err)
                    console.log('Page:manageuser =>'+err)
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
                    alert('Page:manageuser =>'+err)
                    console.log('Page:manageuser =>'+err)
                }
            )
        }
    }

    componentDidMount(){
        if(this.state.userList.length === 0)
        this.LoadUserList();
    }

    render(){
        return(
            <div className="jumbotron container-fluid overflow-auto">
               <div className='row ml-2'>
                    <div class="form-group ml-1">
                        <label>Search by CNIC Number:</label>
                        <input  type='text' class="form-control" onChange={this.LoadUserList} name='SearchByCnic'/>
                    </div>
                    <div class="form-group ml-1">
                        <label>Search by Name:</label>
                        <input  type='text' class="form-control" onChange={this.LoadUserList} name='SearchByName'/>
                    </div>
               </div>
                <h3>User List</h3>
                <div className='row overflow-auto'>
                <table className="table table-bordered ">
                    <thead>
                        <tr >
                            <th>System Id</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Accounts Details</th>
                            <th>Add to new Scheme</th>
                            <th>Gender</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>CNIC</th>
                            <th >Last Login (DayName/Month/Day/Year) </th>
                            <th>Registration Date (DayName/Month/Day/Year)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userList.length > 0 ?
                            this.state.userList.map(user=>{
                                
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.role}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <Link to={'/ShowAccountDetails/'+ user.id} >Show</Link>
                                    </td>
                                    <td>
                                        <Link to={'/User/'+ user.id + '/AddtoNewScheme'} >Add</Link>
                                    </td>
                                    <td>{user.gender}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.cnic}</td>
                                    <td>{new Date(user.lastLogin).toDateString() + ' ' 
                                     + new Date(user.lastLogin).toLocaleTimeString() }</td>
                                    <td>{new Date(user.registration_Date).toDateString()}</td>
                                </tr>
                            }): <h5>Please Wait! we are Loading Your Data from Server</h5>
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default UserList;