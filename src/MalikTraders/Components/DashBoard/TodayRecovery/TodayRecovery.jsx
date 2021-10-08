import axios from 'axios';
import {Component} from 'react'
import { Link } from 'react-router-dom';


class TodayRecovery extends Component {

    state= {
        dataArray: []
    }

    loadData = ()=>{
        axios.get(window.$domain + 'api/Analatics/GetTodayRecovery')
        .then(resp=>{
            this.setState({dataArray: resp.data});
        });
    }
    componentDidMount(){
        if(this.state.dataArray.length === 0)
        this.loadData();
    }
    render(){
        return <table class="table table-bordered">
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
                data =>   <tr>
                              <th>{data.name}</th>
                              <td>{data.phone}</td>
                              <td>{data.payed_Amount}</td>
                              <td>{data.scheme}</td>
                              <td>{data.pay_Time}</td>
                              <td><Link to={'/Accounts/'+ data.accId +'/Payment'}>show</Link></td>
                          </tr>
            ): ''
          }
        </tbody>
      </table>
    }
}

export default TodayRecovery;