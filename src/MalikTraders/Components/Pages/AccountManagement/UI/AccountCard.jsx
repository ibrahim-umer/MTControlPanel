
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './CardStyling.module.css'; 
  console.log(styles)
const AccountCard= props =>{
    var [showToast,setShowtoast] = useState(false);
    var toastAccountClose=toast(props.closingReason, {
                                    position: "top-right",
                                    autoClose: 10000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
    return(
        <div class="card shadow m-2" style={{width: '12rem'}}>
            {showToast? <ToastContainer/>: ''}
            <div class="card-body">
                <h5 class="card-title">{props.schemeName}</h5>
                <p class="card-text">{props.desc}</p>
                {props.isAccClosed? '':<button onClick={()=>props.paymentDisplayHandler(props.AccId)} class="btn btn-success">Pay Installment</button>}
                <button onClick={()=>{props.gotoPaymentHistory(props.AccId)}} className='btn btn-info mt-1'>Edit History</button>
                {props.isAccClosed? '' :<button onClick={()=>{props.disableAcc(props.AccId)}} className='btn btn-danger mt-1'>Disable Account</button>}
                {props.isAccClosed?<button onClick={()=>setShowtoast(!showToast)} className='btn btn-primary mt-1'>Show Reason</button> :''}
            </div>
            {props.isAccClosed? <span onClick={props.isAccClosed?()=>props.enableAcc(props.AccId):''} class={"badge badge-danger " + styles.zoom} > <i  class="fa fa-lock" aria-hidden="true"></i></span>:<span class= {"badge badge-success " + styles.zoom}> <i  class="fa fa-check" aria-hidden="true"></i></span>}
        </div>
    );
}

export default AccountCard;