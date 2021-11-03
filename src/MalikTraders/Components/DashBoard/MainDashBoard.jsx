import { Component } from "react"
import DashBoardNavigator from "./DashBoardNavigator/DashBoardNavigator";
import TodayRecovery from "./TodayRecovery/TodayRecovery";
import MonthlyRemainRecovery from "./MonthlyRecoveryReport/MonthlyRecoveryReport";
import MonthlyReport from "./MonthlyReport/MonthlyReport";

class MainDashBoard extends Component{
    state = {
        menuIndex: 1,
    }
    menuSwitchHandler = menu =>{
        this.setState({menuIndex: menu});
    }
    render(){
        return(
            <>
                <div className='col-md-3'>
                    <DashBoardNavigator currentMenu={this.state.menuIndex} menuSwitchingHandler={this.menuSwitchHandler}/>
                </div>
                <div className='col-md-9'> 
                    {
                        this.state.menuIndex === 1? <TodayRecovery/>
                        :this.state.menuIndex === 2? <MonthlyRemainRecovery/>
                        :this.state.menuIndex === 3? <MonthlyReport/>
                        : ''
                    }                    
                </div>
            </>
        );
    }
}

export default  MainDashBoard;