import React from 'react';
import YogaContext from '../Context';
import './CurrentFlow.css';

export default function CurrentFlow() {
    
    return (
        <YogaContext.Consumer>
            {(value) => {
                return(
                    <div className='current-flow'>
                        <h2 className='title'>Current flow: {`${value.currentFlow.title}`.toUpperCase()}</h2>
                    </div>
                )
            }}    
               
                
        
    
               </YogaContext.Consumer>
    )
}