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
        console.log(array)
        const flowPoses = array.map(pose => {
            return < FlowItem
                id={pose.id}
                key={pose.key}
                img={pose.img}
            />
        })


        return (
            <div>
                HELLO
                {flowPoses}
            </div >
        )
    }
}