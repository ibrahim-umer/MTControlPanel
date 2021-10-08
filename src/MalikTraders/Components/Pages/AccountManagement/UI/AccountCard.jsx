


const AccountCard= props =>{
    return(
        <div class="card m-2" style={{width: '12rem'}}>
            <div class="card-body">
                <h5 class="card-title">{props.schemeName}</h5>
                <p class="card-text">{props.desc}</p>
                <button onClick={()=>props.paymentDisplayHandler(props.AccId)} class="btn btn-success">Pay Installment</button>
                <button onClick={()=>{props.gotoPaymentHistory(props.AccId)}} className='btn btn-light mt-1'>Edit History</button>
            </div>
        </div>
    );
}

export default AccountCard;