import React from 'react';
import Context from '../Context';

export default class PoseFullCard extends React.Component {
    static contextType = Context;

    render() {

        const { pose_id } = this.props.match.params;
        const pose = this.context.poses.find(pose => pose.id == pose_id)

        return (
            <div>
                <h3>{pose.nameEng}</h3>
                <h3>{pose.nameSan}</h3>
                <p>{pose.benefits}</p>
                <p>{pose.level}</p>
                <p>{pose.poseType}</p>
                <img src={pose.img} />
                <iframe width="560" height="315" src={pose.utube} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>

        )
    }

}