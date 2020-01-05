import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import YogaContext from '../Context';

export default class FlowItem extends React.Component {
    static contextType = YogaContext;

    linkTo = () => {
        const { flowId, poseId } = this.props;
        this.props.history.push(`/flow/${flowId}/pose/${poseId}`)
    }

    deletePoseFromFlow = (id) => {
        console.log('deleting', id)
        this.context.deletePoseFromFlow(id)
    }
    
    render() {
        return (
            <li key={this.props.id}>
                <img src={this.props.img} onClick={this.linkTo}/>
                <button type='button' onClick={() => this.deletePoseFromFlow(this.props.poseId)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </li>
        )
    }

}
;