import { Component } from "react";
import {Link} from 'react-router-dom'
class NavBar extends Component{
    render(){
        return(
            <nav className=" navbar-expand-lg navbar navbar-light bg-dark  py-3" id="mainNav">
                <div className="container">
                    <Link to="/" class="navbar-brand js-scroll-trigger" >Admin Control Panel</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">DashBoard</Link></li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                User
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item"  to="/manageuser" >Show User List</Link>
                                    <Link className="dropdown-item" to='/CreateUser' >Create New User</Link>
                                    <Link className="dropdown-item disabled" >Update Existing User</Link>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/Products">Products</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );   
    } 
}


export default NavBar;