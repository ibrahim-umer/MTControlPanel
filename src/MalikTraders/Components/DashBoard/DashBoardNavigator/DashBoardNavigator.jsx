
import { Link } from "react-router-dom";

const DashBoardNavigator = (props)=>{

    return(
        <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
                <Link onClick = {()=>props.menuSwitchingHandler(1)} className={"nav-link " + props.currentMenu===1? "active": ""}  >Today Recovery Details</Link>
            </li>
            <li className="nav-item">
                <Link onClick = {()=>props.menuSwitchingHandler(2)}  className={"nav-link " + props.currentMenu===2? "active": ""}>Show Remain Recovery</Link>
            </li>
            <li className="nav-ite