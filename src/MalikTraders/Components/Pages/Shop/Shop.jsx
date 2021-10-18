import { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import ShopAdminLayout from "../../AdminLayout/ShopAdminLayout";
import HeaderBox from "./HeaderBox/HeaderBox";

class Shop extends Component
{
    render(){
        return(
            <ShopAdminLayout>
                <Jumbotron>
                   <HeaderBox/>
                </Jumbotron>
            </ShopAdminLayout>
        );
    }
}

export default Shop;