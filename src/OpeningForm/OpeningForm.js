import React from 'react';
import YogaContext from '../Context';
import APIFlowCalls from '../services/API_Flow_service';
import TokenService from '../services/token-service';
import config from '../config';
import './OpeningForm.css';

export default class OpeningForm extends React.Component {
    static contextType = YogaContext;
    state = {
        selection: null,
        error: null,
    }

    componentDidMount = () => {
        APIFlowCalls.getAllUserFlows()
            .then(data => {
                this.context.setFlowsList(data);
            })
            .catch(err => {
                this.context.setError(err);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newFlowName } = e.target;
        const newFlow = {
            title: newFlowName.value,
        };

        const token = TokenService.hasAuthToken(config.TOKEN_KEY);
        if (!token) {
            this.props.history.push(`/login`);
        } else {
            APIFlowCalls.postNewFlow(newFlow)
                .then(data => {
                    newFlowName.value = '';
                    this.context.setCurrentFlow(data);
                    this.props.history.push('/flow');
                })
                .catch(res => {
                    console.log(res);
                    this.setState({
                        error: res,
                    });
                });
        }
    }

    onSelectFlow = (e) => {
        e.preventDefault();
        this.setState({
            selection: e.target.value
        });
    }

    enterFlow = () => {
        
        const flow = this.context.flows.find(flow => flow.title === this.state.selection);
       console.log('here')
        this.context.setCurrentFlow(flow)
        this.context.enterFlow(flow);
       
        this.props.history.push(`/flow`);
    }

    render() {
        const flowListName = this.context.flows.map((flow, key) => {
            return (
                <option key={key} value={flow.title}>{flow.title}</option>
            );
        });

        return (
            <div className='form-container'>
                <div className='error'>
                    {this.state.error ? this.state.error.message : null}
                </div>
                {(this.props.location.pathname === '/flowForm') ?
                    <div>
                        <h2>Please create a new flow or select an existing one.</h2>
                    </div>
                    : null}
                <div className='opening-form'>
                    <form onSubmit={this.handleSubmit} className='flow-form'>

                        <div className='form__group1 field form-small-container'>
                            <h3 className='flow-choice'>Create a new flow:</h3>
                            <input type="input" className="form__field" placeholder="flow name" name="name" id='newFlowName'  />
                        </div>
                        <div className='button-container'>
                            <button type='submit'>enter </button>
                        </div>
                    </form>

                    {this.context.flows.length > 0 ? <div className='flow-selection'>
                        <div className='form-small-container'>
                            <h3 className='flow-choice'>Choose exisiting flow: </h3>
                            <select className="form__field" onChange={this.onSelectFlow}>
                                <option value=''>Pick a flow</option>
                                {flowListName}
                            </select>
                        </div>
                        <div className='button-container'>
                            {this.state.selection === null ? <button disabled={!this.state.selection} className='disabled' onClick={this.enterFlow}> enter</button> : <button onClick={this.enterFlow}> enter</button>}
                        </div>
                    </div>
                        : null}
                </div>   
            </div>
        );
    }
}
