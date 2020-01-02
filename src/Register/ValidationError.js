import React from 'react';


export default function ValidationError(props) {
    if(props.message) {
        return (
            <div>{props.message}</div>
        )
    }
}