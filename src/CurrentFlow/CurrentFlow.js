import React from 'react';
import yogaContext from '../Context';

export default function CurrentFlow() {
   
    return (
        <yogaContext.Consumer>
            {(value) => {
                return(
                    <div>
                        <h2>Current Flow: {`${value.currentFlow.name}`}</h2>
                    </div>
                )
            }}    
               
                
        
    
        </yogaContext.Consumer>
    )
}