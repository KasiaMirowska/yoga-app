import React from 'react';
import STORE from './store';


const YogaContext = React.createContext({
    currentFlowId: null,
    currentFlow: {},
    poses: [],
    flows: [],
    openPoseCard: {},
    setPosesList: () => { },
    setFlowsList: () => { },
    setOpenPoseCard: () => { },
    setCurrentNewFlow: () => {},
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
            openPoseCard: {
                id:null,
                name_eng: '',
                name_san: '',
                benefits: '',
                pose_type: '',
                pose_level: '',
                img: '',
                video: '',
                attributesList: '',
                notes: '',

            },
            poses: [],
            flows: [],
            poseAttributes: [],
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
     setCurrentNewFlow = (newFlow) => {
         console.log(newFlow, 'CURRENT NEW FLOW')
         this.setState({
             currentFlowId: newFlow.id,
             currentFlow : {
                 ...this.state.currentFlow,
                 id: newFlow.id,
                 title: newFlow.title,
             }
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

    setOpenPoseCard = (data) => {
    
        this.setState({
            openPoseCard: {
                id: data.id,
                name_eng: data.name_eng,
                name_san: data.name_san,
                benefits: data.benefits,
                pose_type: data.pose_type,
                pose_level: data.pose_level,
                img: data.img,
                video: data.video,
                attributesList: '',
                notes: '',
            }
                

        })
    }

    addFlow = (newFlow) => {
                this.setState({
                    flows: [...this.state.flows, newFlow],
                    currentFlow: newFlow,
                })
            }

    // updateFullFlow = (pose, currentFlow, sectionName) => {
    //             const flowSection = currentFlow[sectionName];
    //             const newFlowSection = [...flowSection, pose];
    //             const updatedFlow = { ...currentFlow, [sectionName]: newFlowSection };
    //             console.log('CURRENTFLOW', currentFlow, this.state.flows)
    //             const updatedFlows = this.state.flows.map(flow => {
    //                 if (flow.id === currentFlow.id) {
    //                     return currentFlow;
    //                 } else {
    //                     return flow;
    //                 }
    //             })

    //             this.setState({
    //                 currentFlow: { ...updatedFlow },
    //                 flows: updatedFlows,
    //             });
    //         }

    updateAttributes = (newAttributes) => {
                this.setState({
                    poseAttributes: [...this.state.poseAttributes, newAttributes],
                })
            }


    render() {
            console.log(this.state.currentFlow, 'CURRENT FLOWLFLOW FLOW')
            const contextValue = {
             
                openPoseCard: this.state.openPoseCard,
                currentFlowId: this.state.currentFlowId,
                currentFlow: this.state.currentFlow,
                poses: this.state.poses,
                flows: this.state.flows,

                setError: this.setError,
                setCurrentFlow: this.setCurrentFlow,
                setPosesList: this.setPosesList,
                setFlowsList: this.setFlowsList,
                setOpenPoseCard: this.setOpenPoseCard,
                setCurrentNewFlow: this.setCurrentNewFlow,
                addFlow: this.addFlow,
                enterFlow: this.enterFlow,
                updateAttributes: this.updateAttributes,
                updateFullFlow: this.updateFullFlow,
                poseAttributes: this.state.poseAttributes,
            }
            
        return(
            <YogaContext.Provider value={ contextValue } >
            { this.props.children }
            </YogaContext.Provider >
        )
    }
}