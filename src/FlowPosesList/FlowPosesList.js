  import React from 'react';
import YogaContext from '../Context';
import FlowItem from '../FlowItem/FlowItem';
import APIcalls from '../services/API_Flow_service';

export default class FlowPosesList extends React.Component {
    static contextType = YogaContext;
    

    componentDidMount = () => {
        const flowId = this.context.currentFlowId;
        APIcalls.getAllPosesInFlow(flowId)
            .then(data => {
                console.log(data)
                this.context.setCurrentFlow(data);
            })
    }
    
    render() {
        const currentFlowIds = this.context.currentFlow.assignedPoses;
        const { poses } = this.context;

        let array = [];
        currentFlowIds.forEach(id => {
            poses.find(pose => {
                if (pose.id === id) {
                    array.push(pose)
                }
            })
        })
        
        const flowPoses = array.map((pose, key) => {
            return < FlowItem
                key={pose.key}
                id={pose.id}
                img={pose.img}
                flowId={this.context.currentFlow.id}
            />
        })


        return (
            <div>
                {flowPoses}
            </div >
        )
    }
}