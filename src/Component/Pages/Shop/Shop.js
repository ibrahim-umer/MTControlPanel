
//Lib Imports
import CommonLayout from "../../Layout/CommonLayout";
import ServiceCards from './ServiceCards/ServiceCards';
import SideBar from './ShopSideBar/SideBar'
import Slider from './PermotionSlider/Slider'

const Shop = props => {
    return (
        <CommonLayout>
            <div class="container-fluid mt-5" style={{ backgroundColor: "LightGray" }}>
                <div class="row pt-2">
                    <SideBar/>
                    <div class="col-lg-9">
                        <Slider/>
                        <div class="row">
                           <ServiceCards />
                        </div>
                    </div>
                </div>
            </div>
        </CommonLayout>
    );
}

export default Shop;