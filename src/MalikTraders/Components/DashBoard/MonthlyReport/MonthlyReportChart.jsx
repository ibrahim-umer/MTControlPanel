



import Chart from "react-google-charts";

const MonthlyReportChart = ({title,graphData}) =>{
    return(
        <Chart
            width={'650px'}
            height={'450px'}
            chartType="ComboChart"
            loader={<div className='jumbotron'>Loading Chart</div>}
            data={graphData}
            options={{
                title: title,
                vAxis: { title: 'Paid Customer' },
                hAxis: { title: 'Monthly' },
                seriesType: 'bars',
                series: { 6: { type: 'line' } },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );

}

export default MonthlyReportChart;