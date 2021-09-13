

export default function Status(props){
    return(
        <div className="v_stat">
            <ul className="head2">
                <li>{props.stat} </li> 
                <p className="bg" id={props.stat} ><span className="v_num">{props.n}</span></p> 
            </ul>
        </div>
    )
}