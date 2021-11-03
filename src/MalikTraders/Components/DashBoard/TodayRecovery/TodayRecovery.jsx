import axios from 'axios';
import {Component} from 'react'
import { Link } from 'react-router-dom';


class TodayRecovery extends Component {

    state= {
        dataArray: [],
        recoverySum: 0
    }

    loadData = ()=>{
        axios.get(window.$domain + 'api/Analatics/GetTodayRecovery')
        .then(resp=>{
            this.setState({dataArray: resp.data});
            this.state.dataArray.map(
              data=>{
                this.setState({recoverySum: this.state.recoverySum + data.payed_Amount});
              }
            )
        });
    }
    componentDidMount(){
        if(this.state.dataArray.length === 0)
        this.loadData();
        
    }
    render(){
      var sum = 0;
        return <>
          <div class="card  shadow h-30 py-1">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Gain Recovery (Today)</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">PKR{' '+this.state.recoverySum}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fa fa-credit-card fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
          </div>
          <table class="table shadow table-bordered">
            <thead>
              <tr>
                <th >Client Name</th>
                <th >Phone</th>
                <th >Payed Amount</th>
                <th >Scheme Name</th>
                <th >Payment Time</th>
                <th >Show Account</th>
              </tr>
            </thead>
            <tbody>
              {
                  this.state.dataArray.length !== 0 ? this.state.dataArray.map(
                    data =>{
                    return  <tr>
                                  <th>{data.name}</th>
                                  <td>{data.phone}</td>
                                  <td>{data.payed_Amount}</td>
                                  <td>{data.scheme}</td>
                                  <td>{data.pay_Time}</td>
                                  <td><Link to={'/Accounts/'+ data.accId +'/Payment'}>show</Link></td>
                              </tr>}
                ): ''
              }
            </tbody>
          </table>
        </>
    }
}

export default TodayRecovery;