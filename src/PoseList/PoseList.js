import React from 'react';
import YogaContext from '../Context';
import PoseListItem from '../PoseListItem/PoseListItem';



export default class PoseList extends React.Component {
   static contextType = YogaContext;
    
    
    render() {
        const poses = this.context.poses.map(pose => {
            return <PoseListItem 
                    key={pose.id}
                    id={pose.id}
                    name={pose.nameEng}
                    sanskrit={pose.nameSan}
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