import React from 'react';
import { Link } from 'react-router-dom';



export default function PoseListItem(props) {
    const pose_id = props.id
    console.log(pose_id)
    return (

        <Link to={`/pose/${pose_id}`}>
            <h2>{props.name}</h2>
            <h2>{props.saskrit}</h2>
            <img src={props.img} />
        </Link>

    )

}