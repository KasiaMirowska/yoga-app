import React from 'react';
import STORE from './store';


const YogaContext = React.createContext({

    currentFlow: '',
    poses: [],
    flows: [],
    addFlow: () => { },
    enterFlow: () => { },
    updateFullFlow: () => { },
    updateAttributes: () => { },
    poseAttributes: [],
})

export default YogaContext;


export class YogaContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentFlow: null,
            poses: STORE.poses,
            flows: STORE.flows,
            poseAttributes: STORE.attributes
        }
    }

    enterFlow = (flow) => {
        this.setState({
            currentFlow: flow,
        })
    }

    addFlow = (newFlow) => {
        this.setState({
            flows: [...this.state.flows, newFlow],
            currentFlow: newFlow,
        })
    }

    updateFullFlow = (pose, currentFlow, sectionName) => {
        const flowSection = currentFlow[sectionName];
        const newFlowSection = [...flowSection, pose];
        const updatedFlow = { ...currentFlow, [sectionName]: newFlowSection };
        console.log('CURRENTFLOW', currentFlow, this.state.flows)
        const updatedFlows = this.state.flows.map(flow => {
            if(flow.id === currentFlow.id) {
                return currentFlow;
            } else {
                return flow;
            }
        })
        
        this.setState({
            currentFlow: {...updatedFlow},
            flows: updatedFlows,
        });
    }

    updateAttributes = (newAttributes) => {
        this.setState({
            poseAttributes: [...this.state.poseAttributes, newAttributes],
        })
    }


    render() {
        console.log(this.state.poseAttributes)
        const contextValue = {
            currentFlow: this.state.currentFlow,
            poses: this.state.poses,
            flows: this.state.flows,
            addFlow: this.addFlow,
            enterFlow: this.enterFlow,
            updateAttributes: this.updateAttributes,
            updateFullFlow: this.updateFullFlow,
            poseAttributes: this.state.poseAttributes,
        }

        return (
            <YogaContext.Provider value={contextValue}>
                {this.props.children}
            </YogaContext.Provider>
        )
    }
}