import React from 'react';
import {Link} from 'react-router-dom';


export default function FlowItem(props) {
    const {flowId, id} = props
    return (
        <div>
            <Link to={`/flow/${flowId}/${id}`}>
            <img src={props.img} />
            </Link>
        </div>
    )
}