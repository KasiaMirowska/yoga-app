import React from 'react';
import YogaContext from '../Context';
import APIFlowCalls from '../services/API_Flow_service';
import TokenService from '../services/token-service';
import config from '../config';


export default class OpeningForm extends React.Component {
    static contextType = YogaContext;
    state = {
        selection: null,
    }
    
    componentDidMount = () => {
        APIFlowCalls.getAllUserFlows()
            .then(data => {
                this.context.setFlowsList(data)
            })
            .catch(err => {
                this.context.setError(err)
            })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { newFlowName } = e.target
        const newFlow = {
            title: newFlowName.value,
        }
        
        const token = TokenService.hasAuthToken(config.TOKEN_KEY)
            if (!token) {
                console.log('NO TOKEN')
                this.props.history.push(`/login`)
            } 
            else { 
                APIFlowCalls.postNewFlow(newFlow)
                .then(data => {
                    newFlowName.value = '';
                    this.context.setCurrentFlow(data);
                    this.props.history.push('/flow');
                })
                .catch(err => {
                    this.setState({
                        error: err.message,
                    })
                })}
               
       
     };
    
    onSelectFlow = (e) => {
        e.preventDefault();
        this.setState({
            selection: e.target.value
        })
    }
    enterFlow = () => {
        const flow = this.context.flows.find(flow => flow.title === this.state.selection)
        this.context.enterFlow(flow)
        this.props.history.push(`/flow`)
    }

    render() {
        const flowListName = this.context.flows.map((flow, key) => {
            return ( 
                <option key={key} value={flow.title}>{flow.title}</option>
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
