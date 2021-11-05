import { Component } from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";
import Axios from "axios";
import {Link} from 'react-router-dom';
import Cookie from 'universal-cookie';
import { Redirect } from "react-router";

class ProductManager extends Component{
    state = {
        mtServices: null,
        isLogin: true
    }
    

    componentDidMount(){
        if(this.state.mtServices===null){
            Axios.get(window.$domain + 'api/MTServices').then(
                resp=>{
                    this.setState({mtServices: resp.data});
                }
            ).catch(
                err=>{
                    alert('Page: Product Load =>'+ err)
                }
            )
        }
        var cookies = new Cookie();
        if(cookies.get('logedInUser') === undefined)
        {
            this.setState({isLogin: false});
        }
    }

    render(){
        return(
            <AdminLayout>
                {/* {this.state.isLogin?'':<Redirect to='/login'/>} */}
                <div className='jumbotron'>
                    <h3>Manage Products/Schemes</h3>
                    <div className='row m-1 overflow-auto'>
                        <table className="table shadow table-bordered ">
                            <thead>
                                <tr >
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Total Amount</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.mtServices?
                                this.state.mtServices.map(service=>{
                                    return  <tr>
                                                <td>{service.id}</td>
                                                <td>{service.name}</td>
                                                <td>{service.amount}</td>
                                                <td>{service.details}</td>
                                            </tr>
                                }):'we are loading data from server'
                            }
                            </tbody>
                        </table>
                    </div>
                    <Link className='btn btn-success shadow' to='/AddProduct' >
                        Add More Product
                    </Link>
                </div>
            </AdminLayout>

        )
    }

}

export default ProductManager;