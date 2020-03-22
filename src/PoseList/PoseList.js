import React from 'react';
import YogaContext from '../Context';
import PoseListItem from '../PoseListItem/PoseListItem';
import APIPoseCalls from '../services/API_Pose_service';
import './PoseList.css';

export default class PoseList extends React.Component {
    static contextType = YogaContext;
    state = {
        error: null,
    }

    componentDidMount = () => {
        APIPoseCalls.getAllPosesData()
            .then(data => {
                this.context.setPosesList(data);
            })
            .catch(res => {
                this.setState({
                    error: res
                });
            });
    }

    render() {
        const poses = this.context.poses.map(pose => {
            return <PoseListItem
                key={pose.id}
                id={pose.id}
                name={pose.name_eng}
                sanskrit={pose.name_san}
                img={pose.img}
            />;
        });

        return (
            <div className='pose-list'>
                <div className='error'>
                    {this.state.error ? this.state.error.message : null}
                </div>
                <h2 className='title' >POSES LIBRARY: </h2>
                <ul className='poses-container'>
                    {poses}
                </ul>
            </div>
        );
    }
}