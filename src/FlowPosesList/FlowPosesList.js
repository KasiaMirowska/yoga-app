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
                this.context.setCurrentFlow(data);
            })
    }
    
    render() {
        let currentFlowPosesIds = this.context.currentFlow.assignedPoses;
        const { poses } = this.context;
       
        let array = [];
        currentFlowPosesIds.map(id => {
            poses.find(pose => {
                if (pose.id === id) {
                    array = [...array, pose]
                }
            })
            return array;
        })
        
        const flowPoses = array.map((pose, index) => {
            return < FlowItem
                key={index}
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