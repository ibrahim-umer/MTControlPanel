
import { Link } from "react-router-dom";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import { Spinner } from 'react-bootstrap';
const { default: axios } = require("axios")
const { useState, useEffect } = require("react")

const DisplayUser = (props) => {
    var [user, setUser] = useState(null);
    useEffect(() => {
        if (!user)
            axios.get('https://localhost:44302/api/Analatics/GetUserAllInfo/'+ props.match.params.id )
                .then(resp => setUser(resp.data));
    })
    return (
        <AdminLayout>
            {user ? <div className='jumbotron'>
                <div style={{ textAlign: 'center' }}><i className="fa fa-user fa-2x" aria-hidden="true"></i></div>
                <h4 style={{ textAlign: 'center' }}>User Details</h4>

                <div className='row'>
                <div className='col-md-12 m-2'>
                    Goto{user.schemeAccounts?<Link to={'/ShowSchemeAccountDetails/' + user.id } className='btn' >Scheme</Link>:' No Scheme Data Found'}/
                        {user.userShopAccount?<Link to={'/user/' + user.id + '/shop'} className='btn'>Shop</Link>:' No Shop Account'}
                    <div className='row'>
                        <table className="table  ">
                            <thead>
                                <tr >
                                    <th>User: {user.userDetail.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>{user.userDetail.gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">User Name</th>
                                    <td>{user.userName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Availability</th>
                                    <td>{user.isUserDisabled ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Role</th>
                                    <td>{user.role}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone</th>
                                    <td>{user.userDetail.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phy. ID/CNIC</th>
                                    <td>{user.userDetail.cnic}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td>{user.userDetail.address}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Reg. Date</th>
                                    <td>{new Date(user.userDetail.registration_Date).toDateString()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Last Login</th>
                                    <td>{new Date(user.userDetail.lastLogin).toDateString() + ' '
                                        + new Date(user.userDetail.lastLogin).toLocaleTimeString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div> : <Spinner animation="grow"  /> }
        </AdminLayout>
    );

}

export default DisplayUser;