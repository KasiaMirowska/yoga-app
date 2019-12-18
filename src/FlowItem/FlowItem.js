import React from 'react';



export default function FlowItem(props) {
    return (
        <div>
        
            {props.name}
            <img src={props.img} />
        </div>
    )
}