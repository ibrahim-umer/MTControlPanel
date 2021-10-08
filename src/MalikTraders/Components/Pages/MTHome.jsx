import AdminLayout from "../AdminLayout/AdminLayout"
import Cookie from 'universal-cookie/es6';
import { Redirect } from "react-router";
import { useState } from 'react'
const MTHome = () =>{
    var [isLogin,setLogin] = useState(false);

    var cookies = new Cookie();
        if(cookies.get('logedInUser') !== undefined){
            setLogin(true);
        }
    return(
            <AdminLayout >
                {isLogin?'':<Redirect to='/login'/>}
                <div className="jumbotron mt-4" style={{height: '550px'}}>
                    <h2>Please Wait Soon Available the Statistics</h2>
                </div>
            </AdminLayout>
    )
}

export default MTHome;