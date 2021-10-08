import { Component } from "react";
import AdminLayout from "../../../AdminLayout/AdminLayout";
import Axios from "axios"
import TbInput from '../UI/TbInput'
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
class AddNewProduct extends Component
{
    state = {
        newProduct: {
            id: 0,
            name:'',
            amount: 0,
            details: ''            
        },
        redirect: false
    }
    inputHandler = event=>{
        if(event.target.name === 'Scheme/Product Name')
            this.handleName(event.target.value)
            else if(event.target.name === 'Total Amount')
                this.handleAmount(event.target.value)
                else if(event.target.name === 'Add Details')
                     this.handleDetails(event.target.value)
    }

    handleName = value =>{
        this.setState({newProduct: {
            id: 0,
            name: value,
            amount: this.state.newProduct.amount,
            details: this.state.newProduct.details            
        }})
    }
    
    handleAmount = value =>{
        this.setState({newProduct: {
            id: 0,
            name:  this.state.newProduct.name,
            amount: value,
            details: this.state.newProduct.details            
        }})
    }
    
    handleDetails = value =>{
        this.setState({newProduct: {
            id: 0,
            name:  this.state.newProduct.name,
            amount: this.state.newProduct.amount,
            details:  value           
        }})
    }

    postNewProduct = ()=>{
        Axios.post(window.$domain + 'api/MTServices',this.state.newProduct).then(resp=>{
            this.setState({redirect: true})
        }).catch(err=>{
            alert(err)
        })
    }
    render(){
        return  <AdminLayout>
                    {
                        this.state.redirect? <Redirect to='/products'/>:''
                    }
                    <div className='jumbotron'>
                        <h3>Add New Product</h3>
                        <TbInput DataInputHandler={this.inputHandler} Name='Scheme/Product Name' type='text'   />
                        <TbInput DataInputHandler={this.inputHandler} Name='Total Amount' type='Number'   />
                        <TbInput DataInputHandler={this.inputHandler} Name='Add Details' type='text'   />
                        <Link className='btn btn-success' onClick={this.postNewProduct}>Add Product</Link>
                    </div>
                </AdminLayout>
    }
}
export default AddNewProduct;