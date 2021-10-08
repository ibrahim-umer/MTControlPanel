import UserList from "./UserList/AllUserList";
import AdminLayout from '../../AdminLayout/AdminLayout'
import { useState } from 'react'
import Cookie from 'universal-cookie/es6';
import { Redirect } from "react-router";

const UserManagement = ()=>{
    var [isLogin,setLogin] = useState(false);
    var cookies = new Cookie();
    if(cookies.get('logedInUser') !== undefined && isLogin === false){
        setLogin(true);
    }

    return(
        <AdminLayout >
            {isLogin?'':<Redirect to='/login'/>}
            <UserList/>
        </AdminLayout>
    );
}

export default UserManagement;