import React from 'react';
import yogaContext from '../Context';
import cuid from 'cuid';
import { Link } from 'react-router-dom';

export default class OpeningForm extends React.Component {
    static contextType = yogaContext;
    state = {
        selection: null,
        redirectToNewPath: false,
    }

    handleSubmit = (e) => {
        console.log('here')
        e.preventDefault();
        const { newFlowName } = e.target
        console.log(e.target)
        const newFlow = {
            id: cuid(),
            name: newFlowName.value,
            savedPosesIds: [],
            peakPose: '',
            warmUp: [],
            midFlow: [],
            breakPoses: [],
            afterPeak: [], 
            notes: ''
        }
        this.setState({
            selection: newFlowName,
        })
        this.context.addFlow(newFlow);
        this.props.history.push(`/flow`)
    };
    
    onSelectFlow = (e) => {
        e.preventDefault();
        this.setState({
            selection: e.target.value
        })
    }
    enterFlow = () => {
        const flow = this.context.flows.find(flow => flow.name === this.state.selection)
        console.log(flow, 'HERE METHOD')
        this.context.enterFlow(flow)
        this.props.history.push(`/flow`)
    }

    render() {
        const flowListName = this.context.flows.map((flow, key) => {
            return ( 
                <option key={key} value={flow.name}>{flow.name}</option>
            )
        })
        
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Starting new flow?</h3>
                    <label>Name</label>
                    <input type='text' placeholder='new flow name' id='newFlowName' />
                    
                    <button type='submit'>enter flow</button>
                    
                </form>
                
                {this.context.flows.length > 0 ? <div>
                    <h3>Enter exisiting flow?</h3>
                    <select onChange={this.onSelectFlow}>
                        <option value=''>Pick a flow</option>
                        {flowListName}
                    </select>
                    <button onClick={this.enterFlow}> enter flow</button>
                
                </div> : null}
                
            </div >
        )
    }
}