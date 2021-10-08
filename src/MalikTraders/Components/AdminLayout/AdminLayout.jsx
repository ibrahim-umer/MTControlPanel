import React from 'react';
import NavBar from '../NavBar/NavBar';
const AdminLayout = props =>{
    return(
        <>
            <NavBar/>
            {props.children}
        </>
    );    
}

export default AdminLayout;