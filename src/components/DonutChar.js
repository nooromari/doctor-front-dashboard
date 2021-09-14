import Chart from "react-apexcharts";

function DonutChar(props) {
    let color ="#1A73E8";

    if (props.condition === "Critical"){
         color = '#D9534F'
    } else if (props.condition === "Satisfactory"){
        color = '#fcba03'
    } else{
        color='#29b345'
    }

    const options = {
        legend: {
            show: false,
        },
        fill : {
            colors :[color],
        },
        series: [props.percent],
        labels: ['%'],
        chart: {
            type: 'donut'
        },
        dataLabels: {
            enabled: false,
        },
        value: {
            show: true,
        },
        plotOptions: {
            pie: {
                
                customScale: 1,
                startAngle: 0,
                endAngle: Math.floor(props.percent * 3.6),
                donut: {
                    background: 'transparent',
                    labels: {
                        show: true,
                    }
                }
            }
        }
    }

    const series = [props.percent]

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="150"
                    />
                </div>
            </div>
        </div>
    );
}

export default DonutChar;