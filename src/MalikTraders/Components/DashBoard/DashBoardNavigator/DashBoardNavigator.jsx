
import { Link } from "react-router-dom";

const DashBoardNavigator = (props)=>{
    var active = "nav-link active";
    var inActive = "nav-link";
    return(
        <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
                <Link onClick = {()=>props.menuSwitchingHandler(1)} className={props.currentMenu === 1 ? active : inActive }  >Today Recovery Details</Link>
            </li>
            <li className="nav-item">
                <Link onClick = {()=>props.menuSwitchingHandler(2)}  className={props.currentMenu === 2 ? active : inActive }>Show Remain Recovery</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" >Show Report by Month</Link>
            </li>
        </ul>
    );
}

export default DashBoardNavigator;