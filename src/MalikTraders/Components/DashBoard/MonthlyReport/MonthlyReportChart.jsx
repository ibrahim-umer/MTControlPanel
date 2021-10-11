


import Chart from "react-google-charts";

const MonthlyReportChart = props =>{
    return(
        <Chart
            width={'650px'}
            height={'450px'}
            chartType="ComboChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                'Month',
                'unPaid',
                'Paid',
                ],
                ['Sep', 60, 150],
                ['Oct', 60, 120],
                ['Nov', 50, 117],
                ['Dec', 25, 110],
            ]}
            options={{
                title: props.title,
                vAxis: { title: 'Paid / unPaid' },
                hAxis: { title: 'By Month' },
                seriesType: 'bars',
                series: { 6: { type: 'line' } },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );

}

export default MonthlyReportChart;