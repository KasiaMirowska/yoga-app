import React from 'react';
import TokenService from '../services/token-service';
import config from '../config';
import { withRouter } from 'react-router-dom';



function PoseListItem(props) {
    
    const handleClick = () => {
        console.log(props, props.id)
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
            if (!token) {
                console.log('NO TOKEN')
                props.history.push(`/login`)
            } 
            if(props.location.pathname =='/'){
                props.history.push('/flowForm')
            }
            else {
                console.log(token,'will go to full card!!!!!!!!!!!!!!!!!!!!!!')
                console.log(props.location, 'IMPORTANT')
                props.history.push(`/flow/:${props.id}`)
            }
    } 
   
    return (
        <div onClick={()=>handleClick()}>
                <h2>{props.name}</h2>
                <h2>{props.saskrit}</h2>
                <img src={props.img} />
           
       </div>
       
    )
}

export default withRouter(PoseListItem);