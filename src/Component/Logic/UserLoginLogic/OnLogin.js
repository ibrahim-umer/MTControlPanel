import React from 'react'
import { Link } from 'react-router-dom';

const onLogIn = () => {
    return(
        <>
            <li class="nav-item"><Link className="nav-link btn btn-secondary bg-dark p-1 mb-1 ml-1" style={{fontSize: "11px", width: '80px'}} to="/login">Signin</Link></li>
            <li class="nav-item"><Link className="nav-link btn btn-light bg-dark ml-1 p-1" style={{fontSize: "11px", width: '80px'}} to="/register">Signup</Link></li>                
        </>
    );
}

export default onLogIn;