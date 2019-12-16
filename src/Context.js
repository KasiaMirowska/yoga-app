import React from 'react';
import STORE from './store';


const YogaContext = React.createContext({

    currentFlow: '',
    poses: [],
    flows: [],
    addFlow: () => { },
    enterFlow: () => { },
    updateFlow: () => { },
    setPoseInFlowSection: () => { },
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

    updateFlow = (updatedFlow) => {
        console.log(updatedFlow)
        this.setState({
            currentFlow: updatedFlow,
        })
    }

    setPoseInFlowSection(pose, flow, sectionName) {
        const flowSection = flow[sectionName];
        const newFlowSection = [...flowSection, pose];
        const updatedFlow = { ...flow, [sectionName]: newFlowSection };
        console.log(updatedFlow)
        this.setState({
            currentFlow: updatedFlow
        });
    }

    updateAttributes = (updatedAttributes) => {
        console.log(updatedAttributes)
        this.setState({
            poseAttributes: updatedAttributes,
        })
    }


    render() {
        const contextValue = {
            currentFlow: this.state.currentFlow,
            poses: this.state.poses,
            flows: this.state.flows,
            addFlow: this.addFlow,
            enterFlow: this.enterFlow,
            updateFlow: this.updateFlow,
            updateAttributes: this.updateAttributes,
            setPoseInFlowSection: this.setPoseInFlowSection,
            poseAttributes: this.state.poseAttributes,
          }

          return (
              <YogaContext.Provider value ={contextValue}>
                  {this.props.children}
              </YogaContext.Provider>
          )
    }
}