import ProImg from '../../../../../Assets/Images/7.jpg'

const { default: Rating } = require("../../../../UI/Rating")
const ServiceCard = props => {
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#">
                    <img class="card-img-top" src={ProImg} alt="AMAZON S3 Deploy"/>
                </a>
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="#">
                           Amazon Cloud S3 
                        </a>
                    </h5>
                    <h6>
                        $24.99
                    </h6>
                    <p class="card-text">
                        this is demo
                    </p>
                </div>
               <Rating/>
            </div>
        </div>
    )
}

export default ServiceCard;