import React from 'react';
import DonutChar from './DonutChar';


export default function Condition(props) {

    return (
        <section className="cond_sec">
            <h3 className="cond_title" id={props.condition}>{props.condition}</h3>
            {/* chart */}
            <div>
                <DonutChar condition={props.condition} percent={props.percent} />
            </div>
            <p className="v_nums">{props.num}</p>
            <p>Vehicles</p>
        </section>
    )
}





