import { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import ShopAdminLayout from "../../AdminLayout/ShopAdminLayout";
import HeaderBox from "./HeaderBox/HeaderBox";
import PaymentHistory from "./PaymentHistory/PaymentHistory";
import axios from "axios";
import { Link } from "react-router-dom";

class Shop extends Component
{
    state= {
        accHistory: [],
        currentAmount: 0,
        shopId: 0
    }
    componentDidMount(){
        if(this.state.accHistory.length === 0){
            axios.get(window.$domain + 'api/ShopAccountPaymentHistories/GetShopAccountPaymentHistorybuUserId/' + this.props.match.params.id)
            .then(resp=>{
                this.setState({accHistory: resp.data});
            }).catch(resp=>{
                alert(resp);
            });
        }
        axios.get(window.$domain + 'api/ShopAccounts/GetShopAccountByUserId/' + this.props.match.params.id)
            .then(resp=>{
                this.setState({currentAmount: resp.data.currentPayment});
                this.setState({shopId: resp.data.id});
            }).catch(resp=>{
                alert(resp.data.message);
            });
    }
    render(){
        return(<>
                <ShopAdminLayout>
                    <Jumbotron>
                        <Link to={'/user/' +  this.props.match.params.id  +  '/shop/' + this.state.shopId + '/NewTransection'} className='btn btn-danger mb-2'>New T</Link>
                        <HeaderBox currentAmount= {this.state.currentAmount}/>
                        <PaymentHistory accHistory={this.state.accHistory} />
                    </Jumbotron> 
                </ShopAdminLayout>
            </>
        );
    }
}

export default Shop;