import React from 'react';
import {Link, withRouter} from 'react-router-dom';


function FlowItem(props) {
    const {flowId, poseId} = props
    const linkTo = () => {
        console.log('clicking?')
     props.history.push(`/flow/${flowId}/pose/${poseId}`)
    }
    return (
        <div onClick={linkTo}>
            {/* <Link to={`/flow/${flowId}/${poseId}`}> */}
            <img src={props.img} />
           
        </div>
    )
}
export default withRouter(FlowItem);