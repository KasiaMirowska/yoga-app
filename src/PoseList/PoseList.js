import React from 'react';
import yogaContext from '../Context';
import PoseListItem from '../PoseListItem/PoseListItem';



export default class PoseList extends React.Component {
   static contextType = yogaContext;
    
    
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
               {poses}
            </div>
        )
    }
}