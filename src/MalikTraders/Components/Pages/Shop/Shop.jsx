import { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import ShopAdminLayout from "../../AdminLayout/ShopAdminLayout";
import HeaderBox from "./HeaderBox/HeaderBox";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import axios from "axios";
import { Link } from "react-router-dom";
import {goBack} from '../../../Assets/StaticFunc/UI';
class Shop extends Component
{
    constructor(props) {
        super(props);
        this.state =  {
            accHistory: [],
            currentAmount: 0,
            shopId: 0,
            searchQuery: {
                startDate: null,
                endDate: null
            }, 
            redirectToLogin: false,
            propsDataMount: false
        };
        this.queryDataLoader = this.queryDataLoader.bind(this);
    }
    componentDidMount(){
        if(this.state.accHistory.length === 0)
        {
            axios.get(window.$domain + 'api/ShopAccountPaymentHistories/GetShopAccountPaymentHistorybuUserId/' + this.props.match.params.id)
            .then(resp=>{
                this.setState({accHistory: resp.data});
            }).catch(resp=>{
                alert(resp);
            });
            
        }
    }
    componentDidUpdate(){
        if(this.state.propsDataMount === false){
            axios.get(window.$domain + 'api/ShopAccounts/GetShopAccountByUserId/' + this.props.match.params.id)
                .then(resp=>{
                    this.setState({currentAmount: resp.data.currentPayment});
                    this.setState({shopId: resp.data.id});
                    this.setState({propsDataMount: true});
                }).catch(resp=>{
                    alert(resp.data.message);
                });
        }
    }

    searchByDateTime = (event)=>{
        if(event.target.name === 'Start-Date'){
            this.setState({searchQuery: {
                startDate: new Date(event.target.value).toLocaleDateString(),
                endDate: this.state.searchQuery.endDate
            }});
        }
        if(event.target.name === 'End-Date'){
            this.setState({searchQuery: {
                startDate: this.state.searchQuery.startDate,
                endDate: new Date(event.target.value).toLocaleDateString()
            }});
        }
    }

    queryDataLoader(){
        if(this.state.searchQuery.startDate !== null && this.state.searchQuery.endDate !== null)
        {
            axios.get(window.$domain + 'api/ShopAccountPaymentHistories/SearchShopAccountPaymentHistorybuUserId/' 
                + this.props.match.params.id 
                + '?StartDate=' + this.state.searchQuery.startDate 
                + '&EndDate=' + this.state.searchQuery.endDate)
            .then(
                resp=>{
                        this.setState({accHistory: resp.data});
                }
            ).catch(
                err=> {
                }
            )
        }
        else alert('Check Start and End Date');
}

    render(){
        return(<>
                <ShopAdminLayout>
                    <Jumbotron>
                    {goBack(this.props.history)}
                    <HeaderBox currentAmount= {this.state.currentAmount}/>
                        <div className='row'>
                            <div className='col-md-6'>
                            <label for="StartMonth">Start Date:</label>
                            <input className='shadow form-control shadow' type="date" id="StartMonth" name="Start-Date"
                            defaultValue = '2021-10' onChange={this.searchByDateTime}></input>
                            </div>
                            <div className='col-md-6'>
                                <label for="End-Month">End Date:</label>
                                <input className='shadow form-control shadow' type="date" id="start" name="End-Date"
                                    onChange={this.searchByDateTime}></input>
                            </div>
                        </div>
                        <div className='row m-1'>
                            <Link to={'/user/' +  this.props.match.params.id  +  '/shop/' + this.state.shopId + '/NewTransection'} className='shadow btn btn-danger m-1'>New Transaction <i  className="fa fa-file-invoice" aria-hidden="true"></i></Link>
                            <button onClick={()=>{window.print()}} className='shadow btn btn-success m-1'>Print<i  className="fa fa-print" aria-hidden="true"></i></button>
                            <button className='btn btn-light mt-1 shadow'  style={{marginLeft: 'auto', marginRight: '5px'}}
                            onClick={this.queryDataLoader}>Search<i  className="fa fa-search " aria-hidden="true"></i></button>
                        </div>
                        <PaymentHistory accHistory={this.state.accHistory} />
                    </Jumbotron> 
                </ShopAdminLayout>
            </>
        );
    }
}

export default Shop;