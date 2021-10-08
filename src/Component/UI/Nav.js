import { Component } from "react";
import {Link} from 'react-router-dom'
class NavBar extends Component{

    render(){
        return(
            <nav className=" navbar-expand-lg navbar navbar-dark bg-dark fixed-top py-3" id="mainNav">
                <div className="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">Fiverr React Demo</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Portfollio</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/shop">Shop</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Contact Us</Link></li>
                        
                        </ul>
                    </div>
                </div>
            </nav>
        );   
    } 
}


export default NavBar;