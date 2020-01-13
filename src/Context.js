import React from 'react';
import APIFlowCalls from './services/API_Flow_service';


const YogaContext = React.createContext({
    currentFlowId: null,
    currentFlow: {},
    poses: [],
    flows: [],
    openPoseCard: {},
    setPosesList: () => { },
    setFlowsList: () => { },
    setOpenPoseCard: () => { },
    setAttributesIntoOpenCard: () => {},
    setCurrentNewFlow: () => { },
    setCurrentFlowId: () => { },
    setCurrentFlow: () => { },
    truncateCurrentFlow: () => { },
    addFlow: () => { },
    enterFlow: () => { },
    deletePoseFromFlow: () => {},
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
                title: '',
                assignedPoses: [],
                warmUp: [],
                midFlow: [],
                peakPose: [],
                breakPoses: [],
                afterPeak: [],
            },
            openPoseCard: {
                id: null,
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


    setError = (res) => {
        this.setState({
            error: res,
        })
    }
    enterFlow = (flow) => {
        this.setState({
            currentFlowId: flow.id,
            currentFlow: {
                id: flow.id,
                title: flow.title,
                assignedPoses: [],
                peakPose: [],
                warmUp: [],
                midFlow: [],
                breakPoses: [],
                afterPeak: [],
            }
        })
    }
    

    setCurrentFlow = (flow) => {
        this.setState({
            currentFlowId: flow.id,
            currentFlow: flow,
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
                attributesList: data.attributesList,
                notes: data.notes,
            }
        })
    }


    deletePoseFromFlow = (id) => {
        const newAssignedPoses = this.state.currentFlow.assignedPoses.map(posesArr => {
            return posesArr.filter(pose => pose !== id)
        })
        console.log(newAssignedPoses)
        this.setState({
            currentFlow: {
                ...this.state.currentFlow,
                assignedPoses: newAssignedPoses
            }
        })

        const poseToDelete = id;
        const flowAimed = this.state.currentFlowId;
        APIFlowCalls.deletePoseFromFlow(poseToDelete, flowAimed)
            .then((res) => {
                console.log('deleting POSE FROM FLOW')
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err,
                })
            })
       
    }
  


    render() {
        const contextValue = {

            openPoseCard: this.state.openPoseCard,
            currentFlowId: this.state.currentFlowId,
            currentFlow: this.state.currentFlow,
            poses: this.state.poses,
            flows: this.state.flows,
            setError: this.setError,
            truncateCurrentFlow: this.truncateCurrentFlow,
            setCurrentFlow: this.setCurrentFlow,
            setCurrentFlowId: this.setCurrentFlowId,
            setPosesList: this.setPosesList,
            setFlowsList: this.setFlowsList,
            setOpenPoseCard: this.setOpenPoseCard,
            setAttributesIntoOpenCard: this.setAttributesIntoOpenCard,
            setCurrentNewFlow: this.setCurrentNewFlow,
            addFlow: this.addFlow,
            enterFlow: this.enterFlow,
            deletePoseFromFlow: this.deletePoseFromFlow,
            poseAttributes: this.state.poseAttributes,
        }

        return (
            <YogaContext.Provider value={contextValue} >
                {this.props.children}
            </YogaContext.Provider >
        )
    }
}