import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import YogaContext from '../Context';
import './FlowItem.css';

export default class FlowItem extends React.Component {
    static contextType = YogaContext;

    linkTo = () => {
        const { flowId, poseId } = this.props;
        this.props.history.push(`/flow/${flowId}/pose/${poseId}`);
    }

    deletePoseFromFlow = (id) => {
        console.log('deleting', id);
        this.context.deletePoseFromFlow(id);
    }
    
    render() {
        return (
            <div className='flow-item' >
                <li key={this.props.id} className='li'>
                    <div className='img-container'>
                        <img src={this.props.img} className='flow-img' onClick={this.linkTo} alt='yoga asana'/>
                    </div>
                    <footer>
                        <button className='flow-item-button' type='button' onClick={() => this.deletePoseFromFlow(this.props.poseId)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </footer>
                </li>
            </div>
        );
    }
}