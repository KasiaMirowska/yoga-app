import React from 'react';
import YogaContext from '../Context';
import APIPoseCalls from '../services/API_Pose_service';



export default class FlowFullYogaCard extends React.Component {
    static contextType = YogaContext;

    componentDidMount = () => {
        const flowId = this.context.currentFlowId;
        const clickedPoseId = Number(this.props.match.params.pose_id);
        console.log(clickedPoseId, flowId)
        
        APIPoseCalls.getFullPoseData(clickedPoseId)
            .then(data => {
                console.log(data)
                this.context.setOpenPoseCard(data)
            })
            .catch(error => {
                this.context.setError(error)
            })
            
        APIPoseCalls.getPoseAttributes(flowId, clickedPoseId)
        .then(attributes => {
            console.log(attributes, 'hEREREHREHREHRHERE')
            this.context.setAttributesIntoOpenCard(attributes)
        })
        .catch(error => {
            this.context.setError(error)
        })
    }
    render() {
        const {id, name_eng, name_san, benefits, pose_type, pose_level, img, video, attributesList, notes} = this.context.openPoseCard;
        console.log(this.context.openPoseCard.attributesList)
        if(this.context.openPoseCard.attributesList) {
            const list = this.context.openPoseCard.attributesList.map((att, index) => {
                return (
                    <li key={index}>{att}</li>
                )
            })
            return (
                <div>
                    
                    <h3>{name_eng}</h3>
                    <h3>{name_san}</h3>
                    <p>{benefits}</p>
                    <p>{pose_level}</p>
                    <p>{pose_type}</p>
                    <img src={img} />
                    <iframe width="560" height="315" src={video} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    <h3>Saved Attributes List : </h3>
                    <ul>
                        {list}
                    </ul>
                    <h3>Notes: </h3> */}
                    {/* <p>{notes}</p> */}
                    <button>Edit</button>
                     {/* */} 
                </div>
            )
            
        }
        return null;
        
        
    }
}