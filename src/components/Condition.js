import React from 'react';
import DonutChar from './DonutChar';

// import DonoutChart from 'simple-react-donut-chart'
// import 'simple-react-donut-chart/src/style.css'

export default function Condition(props) {
    // const halfsize = (200 * 0.5);
    // const radius = halfsize - (26 * 0.5);
    // const circumference = 2 * Math.PI * radius;
    // const strokeval = ((props.percent * circumference) / 100);
    // const dashval = (strokeval + ' ' + circumference);

    // const trackstyle = { strokeWidth: 26 };
    // const indicatorstyle = { strokeWidth: 26, strokeDasharray: dashval }
    // const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';




    return (
        <section className="cond_sec">
            <h3>{props.condition}</h3>
            {/* chart */}
            <div>
                <DonutChar condition={props.condition} percent={props.percent} />
            </div>
            
            {/* <svg width= "200" height="200" className="donutchart">
                <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track" />
                <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator" />
                <text className="donutchart-text" x={halfsize} y={halfsize} style={{ textAnchor: 'middle' }} >
                    <tspan className="donutchart-text-val">{props.percent}</tspan>
                    <tspan className="donutchart-text-percent">%</tspan>
                    <tspan className="donutchart-text-label" x={halfsize} y={halfsize + 10}>{props.condition}</tspan>
                </text>
            </svg> */}
            <p>{props.num}</p>
            <p>Vehicles</p>
        </section>
    )
}





