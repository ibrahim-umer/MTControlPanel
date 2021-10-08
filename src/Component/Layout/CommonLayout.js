import React from 'react';
import NavBar from '../UI/Nav';
import Footer from '../UI/Footer'
const CommonLayout = props =>{
    return(
        <>
            <NavBar/>
            {props.children}
            <Footer/>
        </>
    );    
}

export default CommonLayout;