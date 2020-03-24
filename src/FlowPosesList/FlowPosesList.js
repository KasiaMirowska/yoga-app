import React from 'react';
import YogaContext from '../Context';
import FlowItem from '../FlowItem/FlowItem';
import APIFlowCalls from '../services/API_Flow_service';
import './FlowPosesList.css';


export default class FlowPosesList extends React.Component {
    static contextType = YogaContext;
    state = {
        error: null,
    }

    componentDidMount = () => {
        let flowId = this.context.currentFlowId;
      
        if(!flowId) {
            this.props.history.push('/')
        } else {
            APIFlowCalls.getAllPosesInFlow(flowId)
            .then(data => {
                this.context.setCurrentFlow(data);
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            });
        }
        
    }

    render() {
        let currentFlowPosesIds = this.context.currentFlow.assignedPoses;
        const { poses } = this.context;

        let orderedIds = currentFlowPosesIds.map(element => {
            return element.map(id => {
                return poses.find(pose => pose.id === id);
            });
        });
           
        
        const flowPoses = orderedIds.map(element => element.map((pose, index) => {
            return (
                < FlowItem
                    key={index}
                    {...this.props} 
                    poseId={pose.id}
                    img={pose.img}
                    flowId={this.context.currentFlow.id}
                />
            );
        }));
        
        return (
            <div >
                 <div className='error'>
                    {this.state.error ? this.state.error.message : null}
                </div>
                <ul className='flow-poses-container'>
                {flowPoses}
                </ul>
            </div >
        );
    }
}