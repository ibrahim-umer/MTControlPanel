
import { Link } from "react-router-dom";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import { Spinner } from 'react-bootstrap';
const { default: axios } = require("axios")
const { useState, useEffect } = require("react")

const ico = icoName=><><i className={"fa fa-" + icoName} aria-hidden="true"></i> &#160;</> 

const DisplayUser = (props) => {
    var [user, setUser] = useState(null);
    useEffect(() => {
        if (!user)
            axios.get(window.$domain + 'api/Analatics/GetUserAllInfo/'+ props.match.params.id )
                .then(resp => setUser(resp.data));
    });

    return (
        <AdminLayout>
            {user ? <div className='jumbotron'>
                <div style={{ textAlign: 'center' }}><i className="fa fa-user fa-2x" aria-hidden="true"></i></div>
                <h4 style={{ textAlign: 'center' }}>User Details</h4>

                <div className='row'>
                <div className='col-md-12 m-2'>
                    Goto{user.schemeAccounts?<Link to={'/ShowSchemeAccountDetails/' + user.id } className='btn btn-success ml-1 mr-1' > Scheme &#160;<i className="fa fa-magic" aria-hidden="true"></i></Link>:' No Scheme Data Found'}/
                        {user.userShopAccount?<Link to={'/user/' + user.id + '/shop'} className='btn btn-info ml-1 mr-1'> Shop &#160;<i className="fa fa-file-invoice" aria-hidden="true"></i></Link>:' No Shop Account'}
                    <div className='row'>
                        <table className="table  ">
                            <thead>
                                <tr >
                                    <th>{ico('user')}User: {user.userDetail.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{ico('venus-mars')}Gender</th>
                                    <td>{user.userDetail.gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('signature')}User Name</th>
                                    <td>{user.userName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('at')}Email</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('vote-yea')}Availability</th>
                                    <td>{user.isUserDisabled ? 'No' : 'Yes'}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('user-tag')}Role</th>
                                    <td>{user.role}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('phone')}Phone</th>
                                    <td>{user.userDetail.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('fingerprint')}Phy. ID/CNIC</th>
                                    <td>{user.userDetail.cnic}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('map-marker-alt')}Address</th>
                                    <td>{user.userDetail.address}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('registered')}Reg. Date</th>
                                    <td>{new Date(user.userDetail.registration_Date).toDateString()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">{ico('sign-in-alt')}Last Login</th>
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