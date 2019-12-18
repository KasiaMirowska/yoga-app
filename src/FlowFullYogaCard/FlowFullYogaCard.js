import React from 'react';
import YogaContext from '../Context';



export default class FlowFullYogaCard extends React.Component {
    static contextType = YogaContext;
    
    render(){
        console.log('HERE', this.context)
        return(
            <div>
                hi flow
                this.context.currentFlow.name
            </div>
        )
    }
}