import React from 'react';
import './CurrentFlow.css';
import YogaContext from '../Context';


export default class CurrentFlow extends React.Component {
    static contextType = YogaContext;
    handleBack = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='current-flow'>
                <h2 className='title'>Current flow: {`${this.context.currentFlow.title}`.toUpperCase()}</h2>
                <button type='button' id='flow-button' onClick={this.handleBack} >Back</button>
            </div>
        );
    }

}