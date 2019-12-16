import React from 'react';
import YogaContext from '../Context';

export default function CurrentFlow() {
   
    return (
        <YogaContext.Consumer>
            {(value) => {
                return(
                    <div>
                        <h2>Current Flow: {`${value.currentFlow.name}`}</h2>
                    </div>
                )
            }}    
               
                
        
    
               </YogaContext.Consumer>
    )
}