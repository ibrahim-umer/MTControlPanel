import React from 'react';
import CommonLayout from '../../Layout/CommonLayout'
import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import * as Sections from '../../../Component/InfoSection/HomeSections';
const Home = props =>{
    return(
        <>
            <CommonLayout>
                <Header/>
                <Sections.Section1/>
                <Sections.Section2/>
                <Sections.Section3/>
                <Sections.Section4/>
                <Sections.Section5/>    
            </CommonLayout>
        </>
    );    
}

export default Home;