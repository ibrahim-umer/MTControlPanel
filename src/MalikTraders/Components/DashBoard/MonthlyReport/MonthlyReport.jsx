
import MonthlyReportChart from "./MonthlyReportChart";



const MonthlyReport = props =>{
    return(
        <>
        <h4>Comming Soon</h4>
            <MonthlyReportChart 
            title='Report Number of Paid and unPaid Customer'
            />
            <MonthlyReportChart 
            title='Report Total paid amount and total Remain amount by month'
            />
        </>
    );

}

export default MonthlyReport;