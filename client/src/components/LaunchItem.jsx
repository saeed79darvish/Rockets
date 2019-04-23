import React from 'react'
import classNames from "classnames";
import Moment from 'react-moment';
import { Link } from "react-router-dom";

export default function LaunchItem(props) {

    // launch: { flight_number,
    //     mission_name,
    //     launch_date_local,
    //     launch_success } }


    return (

        <Link to={`/launch/${props.launch.flight_number}`} className="card card-body mb-2"  >
       
            <div className="row md-3" >
                <div className="col-md-9">
                
                    <h4>Mission: <span className={classNames({
                        'text-success': props.launch.launch_success,
                        'text-danger': !props.launch.launch_success
                    })}> {props.launch.mission_name}</span></h4>
                    <p><Moment >{props.launch.launch_date_local}</Moment></p>

                </div>
                {/* <div className="col-md-3">
                    <Link to={`/launch/${props.launch.flight_number}`}className="btn btn-secondary">Launch Details</Link>

                </div> */}

            </div>

        </Link >

    )
}
