import React from 'react';
import {Link} from 'react-router-dom';


export default function FlowItem(props) {
    const {flowId, poseId} = props
    
    return (
        <div>
            <Link to={`/flow/${flowId}/${poseId}`}>
            <img src={props.img} />
            </Link>
        </div>
    )
}