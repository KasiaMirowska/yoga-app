import React from 'react';
import YogaContext from '../Context';
import FlowItem from '../FlowItem/FlowItem';
import APIFlowCalls from '../services/API_Flow_service';

export default class FlowPosesList extends React.Component {
    static contextType = YogaContext;


    componentDidMount = () => {
        let flowId = this.context.currentFlowId;
        
        APIFlowCalls.getAllPosesInFlow(flowId)
            .then(data => {
                console.log(data)
                this.context.setCurrentFlow(data);
            });
    }

    render() {
        let currentFlowPosesIds = this.context.currentFlow.assignedPoses;
        const { poses } = this.context;

        let orderedIds = currentFlowPosesIds.map(element => element.map(id => {
            return poses.find(pose => pose.id === id);
        }));

        console.log(this.context.currentFlow)
        const flowPoses = orderedIds.map(element => element.map(pose => {
            return (
                < FlowItem
                    key={pose.id}
                    {...this.props} 
                    poseId={pose.id}
                    img={pose.img}
                    flowId={this.context.currentFlow.id}
                />
            );
        }));

        return (
            <div>
                <ul>
                {flowPoses}
                </ul>
            </div >
        );
    }
}