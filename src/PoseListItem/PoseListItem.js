import React from 'react';
import TokenService from '../services/token-service';
import config from '../config';
import { withRouter } from 'react-router-dom';
import './PoseListItem.css';


function PoseListItem(props) {

    const handleClick = () => {
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
        if (!token) {
            console.log('NO TOKEN')
            props.history.push(`/login`)
        }
        else if (props.location.pathname === '/') {
            props.history.push('/flowForm')
        }
        else {
            props.history.push(`/flow/${props.id}`)
        }
    }

    return (
        <div className='item' >
            <li className='li' onClick={() => handleClick()}>
                <h2>{props.name}</h2>
                <h2>{props.saskrit}</h2>
                <img src={props.img} alt='pose, asana'/>
            </li>


        </div>

    )
}

export default withRouter(PoseListItem);