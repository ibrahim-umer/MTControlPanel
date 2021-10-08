import axios from 'axios';
import {Component} from 'react'
import { Link } from 'react-router-dom';


class MonthlyRemainRecovery extends Component {

    state= {
        dataArray: []
    }

    loadData = ()=>{
        axios.get(window.$domain + 'api/Analatics/GetRemainingRecoveryCurrentMonth')
        .then(resp=>{
            this.setState({dataArray: resp.data});
        });
    }
    componentDidMount(){
        if(this.state.dataArray.length === 0)
        this.loadData();
    }
    dataLoader= event=>{
      
      axios.get(window.$domain + 'api/Analatics/GetRemainingRecoveryGivenMonth/' + new Date(event.target.value).toDateString() )
        .then(resp=>{
            this.setState({dataArray: resp.data});
        });
    }
    render(){
        return <>
                  <label for="start">Start month:</label>
                  <input type="month" id="start" name="start"
                  min="2019-03" defaultValue = '2021-10' onChange={this.dataLoader}></input>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th >Client Name</th>
                        <th >Phone</th>
                        <th >Scheme Name</th>
                        <th >Show Account</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          this.state.dataArray.length !== 0 ? this.state.dataArray.map(
                            data => <tr>
                                        <th>{data.name}</th>
                                        <td>{data.phone}</td>
                                        <td>{data.scheme}</td>
                                        <td><Link to={'/Accounts/'+ data.accId +'/Payment'}>show</Link></td>
                                    </tr>
                        ): ''
                      }
                    </tbody>
                  </table>
                </>
    }
}

export default MonthlyRemainRecovery;