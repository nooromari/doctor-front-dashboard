import { useState } from "react";
import Chart from "react-apexcharts";

export default function LineChart(props){

    const [per, setPer] = useState("per_month")

    let x, y;
    if (per === "per_month" ){
      x = Object.keys(props.consumption.per_month)
      y = Object.values(props.consumption.per_month) 
    } else if (per === "per_week") {
      x = Object.keys(props.consumption.per_week)
      y = Object.values(props.consumption.per_week) 
    } else if (per === "per_day" ){
      x = Object.keys(props.consumption.per_day)
      y = Object.values(props.consumption.per_day) 
    }

    function handleClick(e){
      e.preventDefault()
      setPer(e.target.value)
      // console.log(per);
      
    }

    const options= {
      stroke: {
        curve: 'smooth',
      },
        chart: {
          id: "line"
        },
        xaxis: {
          categories: x,
        }
      }

    const series= [
        {
          name: "consumption",
          data: y ,
        }
      ]

    return(
      <div className="r">
        <div className="butns">
            <button value={"per_month"} onClick={handleClick}>Month</button>
            <button value={"per_week"} onClick={handleClick}>Week</button>
            <button value={"per_day"} onClick={handleClick}>Day</button>
          </div>
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="line"
            width="600"
          />
        </div>
      </div>
    )
}

