
import AddNewPayment from "../../UserManagement/AddNewPayment/AddNewPayment";
import { useState } from 'react'
import Cookie from 'universal-cookie/es6';
import { Redirect } from "react-router";

const PaymentDetails = props=>{
    var [IsReadyforPayment,setIsReadyforPayment] = useState(false);
    var [isLogin,setLogin] = useState(false);
    var cookies = new Cookie();
    if(cookies.get('logedInUser') !== undefined && isLogin === false){
        setLogin(true);
    }
    return(
        <div className="jumbotron container-fluid overflow-auto">
            {isLogin?'':<Redirect to='/login'/>}
            
            <table className="table table-bordered">
                <thead>
                    <tr >
                        <th>Date</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.peymentHistory.map(payment=>{
                            return <tr>
                                        <td>{new Date(payment.payingDate).toDateString()}</td>
                                        <td>{payment.payedAmount}</td>
                                    </tr>
                        })
                    }
                    
                </tbody>
            </table>
            <button onClick={()=> IsReadyforPayment ? setIsReadyforPayment(false): setIsReadyforPayment(true)} className='btn btn-primary'>Pay Installment</button>
            {
                props.AccId !== 0 && IsReadyforPayment ?
                <AddNewPayment Accid = {props.AccId} />: ''
            }
        </div>
    )
}

export default PaymentDetails;