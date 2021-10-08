import React from 'react'

//Mustr Need Two Props ShowState and a function ChangeState
const onLogedIn = props => {

    return(
        <li onClick={props.ChangeState} class="nav-item dropdown no-arrow show">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="mr-2 d-none d-lg-inline fa fa-user" />{props.displayName}
                <img class="img-profile rounded-circle" src={props.pictureURL}/>
            </a>
            <div style={{display: props.ShowSate}} class="dropdown-menu dropdown-menu-right shadow animated--grow-in " aria-labelledby="userDropdown">
            <a class="dropdown-item" href="#">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
            </a>
            <a class="dropdown-item" href="#">
                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
            </a>
            <a class="dropdown-item" href="#">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
            </a>
            <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </a>
            </div>
        </li>
    );
}

export default onLogedIn;