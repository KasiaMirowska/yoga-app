import React from 'react';
import YogaContext from '../Context';
import PoseListItem from '../PoseListItem/PoseListItem';
import APIcalls from '../services/API_service';


export default class PoseList extends React.Component {
    static contextType = YogaContext;
    
    
    componentDidMount = () => {
        APIcalls.getAllPosesData()
            .then(data => {
                this.context.setPosesList(data);
            })
            .catch(err => {
                this.context.setError(err)
            })
    }

    render() {
        const poses = this.context.poses.map(pose => {
            return <PoseListItem
                key={pose.id}
                id={pose.id}
                name={pose.name_eng}
                sanskrit={pose.name_san}
                img={pose.img}
            />

        })
        return (
            <div>
                <h2>ALL POSES: </h2>
                {poses}
            </div>
        )
    }
}