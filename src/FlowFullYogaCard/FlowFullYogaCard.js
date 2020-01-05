import React from 'react';
import YogaContext from '../Context';
import APIPoseCalls from '../services/API_Pose_service';



export default class FlowFullYogaCard extends React.Component {
    static contextType = YogaContext;
    state = {
        clickedPose: null,
    }

    componentDidUpdate = () => {
        if (this.props.history.location.pathname !== this.state.clickedPose) {
            this.getFullPoseInfo()
        }
    }
    getFullPoseInfo = () => {
        
        const flowId = this.context.currentFlowId;
        const clickedPoseId = Number(this.props.match.params.pose_id);
        const clickedPosePath = this.props.location.pathname;
       
        this.setState({
            clickedPose: clickedPosePath,
        })

        APIPoseCalls.getFullPoseData(clickedPoseId)
            .then(data => {
                this.context.setOpenPoseCard(data)
            })
            .catch(error => {
                this.context.setError(error)
            })

        APIPoseCalls.getPoseAttributes(flowId, clickedPoseId)
            .then(attributes => {
                this.context.setAttributesIntoOpenCard(attributes)
            })
            .catch(error => {
                this.context.setError(error)
            })
    }
    
    componentDidMount = () => {
        this.getFullPoseInfo()
    }
    
    
    render() {
        const { id, name_eng, name_san, benefits, pose_type, pose_level, img, video, attributesList, notes } = this.context.openPoseCard;

        if (attributesList || notes) {
            const list = attributesList.map((att, index) => {
                return (
                    <li key={index}>{att}</li>
                )
            });
            const poseNotes = notes.map((n, index) => {
                return (
                    <li key={index}>{n}</li>
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
                    <h3>Notes: </h3>
                    <ul>
                        {poseNotes}
                    </ul>
                    <button>Edit</button>

                </div>
            )

        }
        return null;



    }
}