import { Component } from "react"
import DashBoardNavigator from "./DashBoardNavigator/DashBoardNavigator";
import TodayRecovery from "./TodayRecovery/TodayRecovery";
import MonthlyRemainRecovery from "./MonthlyRecoveryReport/MonthlyRecoveryReport";
import MonthlyReport from "./MonthlyReport/MonthlyReport";

class MainDashBoard extends Component{
    state = {
        menuSwitcher: 1,
    }
    menuSwitchHandler = menu =>{
        this.setState({menuSwitcher: menu});
    }
    render(){
        return(
            <>
                <div className='col-md-3'>
                    <DashBoardNavigator currentMenu={this.state.menuSwitcher} menuSwitchingHandler={this.menuSwitchHandler}/>
                </div>
                <div className='col-md-9'> 
                    {
                        this.state.menuSwitcher === 1? <TodayRecovery/>
                        :this.state.menuSwitcher === 2? <MonthlyRemainRecovery/>
                        :this.state.menuSwitcher === 3? <MonthlyReport/>
                        : ''
                    }                    
                </div>
            </>
        );
    }
}

export default  MainDashBoard;