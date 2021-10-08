
import { Redirect } from "react-router";
import AdminLayout from "./Components/AdminLayout/AdminLayout"
import { useState } from 'react'
import Cookie from 'universal-cookie/es6';
import MainDashBoard from "./Components/DashBoard/MainDashBoard";

const MTTraderApp = () =>{
    var [isLogin,setLogin] = useState(false);
    var cookies = new Cookie();
    if(cookies.get('logedInUser') !== undefined && isLogin === false){
        setLogin(true);
    }
    
    return(
        <>
            <AdminLayout >
                {isLogin?'':<Redirect to='/login'/>}
                <div className="jumbotron floid-container row mt-2 overflow-auto" style={{height: '600px'}}>
                    <MainDashBoard/>
                </div>
            </AdminLayout>
        </>
    )
}

export default MTTraderApp;