import { Component } from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <nav className=" navbar-expand-lg navbar navbar-light bg-dark  py-3" id="mainNav">
                <div className="container">
                    <Link to="/shop" class="navbar-brand js-scroll-trigger" >Shop Account Management</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/shop">Shop Home</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/Products">Add New Transection</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/Products"></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );   
    } 
}


export default NavBar;