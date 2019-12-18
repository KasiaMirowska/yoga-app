import React from 'react';
import YogaContext from '../Context';
import FlowPosesList from '../FlowPosesList/FlowPosesList';



export default class FlowFullYogaCard extends React.Component {
    static contextType = YogaContext;

    render() {
        const clickedPoseId = this.props.match.params.pose_id;
        const { poses, poseAttributes } = this.context;
        let {attributes , notes} = poseAttributes
        const clickedPose = poses.find(pose => pose.id === Number(clickedPoseId));
        const clickedPoseAttributes = poseAttributes.find(aObject =>  aObject.poseId === Number(clickedPoseId));

        if(!clickedPoseAttributes) {
           notes= '';
           attributes= ''; 
        } else {
            notes = clickedPoseAttributes.notes;
            attributes = clickedPoseAttributes.attributesList.map(a => {
                return <li>{a}</li>
            })
            
        }
        
        return (
            <div>
                <h3>{clickedPose.nameEng}</h3>
                <h3>{clickedPose.nameSan}</h3>
                <p>{clickedPose.benefits}</p>
                <p>{clickedPose.level}</p>
                <p>{clickedPose.poseType}</p>
                <img src={clickedPose.img} />
                <iframe width="560" height="315" src={clickedPose.utube} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <h3>Saved Attributes List : </h3>
                <ul>
                    {attributes}
                </ul>
                <h3>Notes: </h3>
                <p>{notes}</p>
                <button>Edit</button>
                
            </div>
        )
    }
}