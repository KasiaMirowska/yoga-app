import React from 'react';
import YogaContext from '../Context';
import FlowItem from '../FlowItem/FlowItem';

export default class FlowPosesList extends React.Component {
    static contextType = YogaContext;

    render() {
        const currentFlowIds = this.context.currentFlow.savedPosesIds;
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