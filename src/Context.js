import React from 'react';
import STORE from './store';


const YogaContext = React.createContext({
    currentFlowId: null,
    currentFlow: {},
    poses: [],
    flows: [],
    setPosesList: () => { },
    setFlowsList: () => { },
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
            currentFlowId: null,
            currentFlow: {
                id: null,
                assignedPoses: [],
                peakPose: '',
                warmUp: [],
                midFlow: [],
                breakPoses: [],
                afterPeak: [],
            },
            poses: [],
            flows: [],
            poseAttributes: STORE.attributes,
            error: null,
        }
    }


    setError = (err) => {
        this.setState({
            error: err,
        })
    }
    enterFlow = (flow) => {
        this.setState({
            currentFlowId: flow.id,
            currentFlow : {
                id: flow.id,
                title: flow.title,
                assignedPoses: [],
                peakPose: flow.peakpose,
                warmUp: [],
                midFlow: [],
                breakPoses: [],
                afterPeak: [], 
            }
        })
    }

    setCurrentFlow = (data) => {
        data.map(flow => {
            const section = flow.section;
           
            this.setState({
                currentFlow: {
                    ...this.state.currentFlow,
                    id: flow.main_flow_id,
                    assignedPoses: [...this.state.currentFlow.assignedPoses, flow.pose_id],
                    peakPose: flow.peakpose,
                    [section]: [...this.state.currentFlow[section], flow.pose_id]
                }
            })
        })
    }
        
    setPosesList = (data) => {
                this.setState({
                    poses: data,
                })
            }

    setFlowsList = (data) => {
                this.setState({
                    flows: data,
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
                    if (flow.id === currentFlow.id) {
                        return currentFlow;
                    } else {
                        return flow;
                    }
                })

                this.setState({
                    currentFlow: { ...updatedFlow },
                    flows: updatedFlows,
                });
            }

    updateAttributes = (newAttributes) => {
                this.setState({
                    poseAttributes: [...this.state.poseAttributes, newAttributes],
                })
            }


    render() {
            const contextValue = {
                setError: this.setError,
                setCurrentFlow: this.setCurrentFlow,
                setPosesList: this.setPosesList,
                setFlowsList: this.setFlowsList,
                currentFlowId: this.state.currentFlowId,
                currentFlow: this.state.currentFlow,
                poses: this.state.poses,
                flows: this.state.flows,
                addFlow: this.addFlow,
                enterFlow: this.enterFlow,
                updateAttributes: this.updateAttributes,
                updateFullFlow: this.updateFullFlow,
                poseAttributes: this.state.poseAttributes,
            }
            console.log(this.state.currentFlow, 'KKKKKKKKKKKK')
        return(
            <YogaContext.Provider value={ contextValue } >
            { this.props.children }
            </YogaContext.Provider >
        )
    }
}