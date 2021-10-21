


const PaymentHistory = (props) => {
    var i= 0;
    return (
        <div>
            <table className="table mt-2 shadow">
                <thead>
                    <tr>
                        <th scope="col">No#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Received</th>
                        <th scope="col">Paid</th>
                        <th scope="col" tooltip='Transection Date'>Transection Date Time</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.accHistory.map(AccPayment=>{
                        i+=1;
                        return <tr>
                        <td>{i}</td>
                        <th scope="row">{AccPayment.paymentTitle}</th>
                        <td>{AccPayment.amountRecived}</td>
                        <td>{AccPayment.amountPaid}</td>
                        <td>{AccPayment.transectionDate}</td>
                        <td>{AccPayment.paymentDescription}</td>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PaymentHistory;