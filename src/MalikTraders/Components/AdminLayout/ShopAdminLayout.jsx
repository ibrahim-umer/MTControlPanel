import React from 'react';
import ShopNavBar from '../NavBar/ShopNav';
const ShopAdminLayout = props =>{
    return(
        <>
            <ShopNavBar/>
            {props.children}
        </>
    );    
}

export default ShopAdminLayout;