
import MonthlyReportChart from "./MonthlyReportChart";
import axios from "axios";
import { useEffect, useState, useRef} from "react";
import { monthNames } from "../../../Assets/StaticFunc/UI";

const MonthlyReport = props =>{
    var [data, SetData] = useState(null);
    var [totalCustomers,setTotalCustomers] = useState(0);
    var [productList,setProductList] = useState(null)
    const startDateRef = useRef(null);
    const EndDateRef = useRef(null);
    const cbAllowDisableAccountRef = useRef(null);
    var [selectedScheme,setSelectedScheme] = useState(null);

    const addState = event => {
        console.log('called')
        productList.forEach(ele=>{
            if(ele.name === event.target.value) 
                setSelectedScheme(ele.id);
        });
    }

    const searchData = () => {
        
        if(selectedScheme === null) {alert('please select Scheme');return;};
        if(startDateRef.current.value === '' || EndDateRef.current.value === '') {alert('Check Start and End Dates');return;}
        if(startDateRef.current.value > EndDateRef.current.value ) {alert('Check Start date greater to End Dates');return;}
        
        axios.get(window.$domain+'api/Analatics/GetPaidAndUnpaidCustomerReportOfScheme?StartMonth='+ startDateRef.current.value +'&EndtartMonth='+ EndDateRef.current.value +'&SchemeId='+ selectedScheme +'&WithCloseAcc=' + cbAllowDisableAccountRef.current.checked)
        .then(resp => {
            var compiledData= [['Month','Number of Paid Customer']];
            resp.data.data.forEach(element => {
                compiledData.push([monthNames[new Date(element.month).getMonth()] + ' Paid:' +element.totalPaidAmount + 'PKR', element.totalPaidCustomer])
            });
            setTotalCustomers(resp.data.totalCustomer);
            SetData(compiledData);
        })
        .catch(resp=> alert(resp.data));
      };
    useEffect(()=>{
        if(productList === null)
        axios.get(window.$domain + 'api/MTServices').
            then(resp=>{
                setProductList(resp.data);
            });
        });
    return(
        <>
            <h4>Chart Report</h4>
            <select onChange={addState}  class="form-select form-select-lg m-1" aria-label=".form-select-sm example">
                            <option selected >Please Select Scheme/Product</option>
                                {
                                    productList?
                                    productList.map(MTService=>{
                                        return <option id={MTService.id} key={MTService.id}>{MTService.name}</option>
                                    }):
                                    <option selected>Wait We are trying to Load Your Providing Services</option>
                                }
                            </select>
                <div class="form-check m-1">
                <input ref={cbAllowDisableAccountRef} class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label class="form-check-label" for="defaultCheck1">
                    Allow Disable Accounts
                </label>
                </div>   
                <label for="StartMonth">Start Month:</label>
                <input ref={startDateRef} className='shadow form-control  ml-1' type="month" id="StartMonth" name="Start-Date"
                 ></input>
                <label for="End-Month">End Month:</label>
                <input  ref={EndDateRef} className='shadow form-control ml-1' type="month" id="start" name="End-Date" ></input>
                <div className='row'>
                 
                <button className='btn btn-light mt-2' onClick={searchData} style={{marginLeft: 'auto', marginRight: '5px'}}>Search</button>
            </div>
                <MonthlyReportChart 
                    title={'We have total number of customers of selected Scheme are: ' + totalCustomers}
                    graphData = {data}
                />
        </>
    );

}

export default MonthlyReport;