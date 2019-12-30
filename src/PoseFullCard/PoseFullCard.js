import React from 'react';
import YogaContext from '../Context';
import cuid from 'cuid';
import APIPoseCalls from '../services/API_Pose_service';
import APIFlowCalls from '../services/API_Flow_service';
// import TokenService from '../services/token-service';
// import config from '../config';


export default class PoseFullCard extends React.Component {
    static contextType = YogaContext;
    state = {
        flowSection: '',
        notes: '',
        'grounding-pose': false,
        'cooling-pose': false,
        'heat-rising-pose': false,
        'energizing-pose': false,
        'strengthening-pose': false,
        'relaxing-pose': false,
        'releasing-pressure pose': false,
        'stabilizing-pose': false,
        'increasing-flexibility': false,
    
    }
    
    
    componentDidMount = () => {
        const { pose_id } = this.props.match.params;
        
        APIPoseCalls.getFullPoseData(pose_id)
            .then(data => {
                this.context.setOpenPoseCard(data)
            })
            .catch(err => {
                this.context.setError(err)
            })

        }

    handleSubmit = (e) => {
        e.preventDefault();
        const { pose_id } = this.props.match.params;
        const poseId = Number(pose_id);
        const currentFlowId = this.context.currentFlowId;
        const flowSection =this.state.flowSection;
        
        const flowsPose = {
            main_flow_id: currentFlowId,
            pose_id: poseId,
            section_flow_id: Number(flowSection),
        }
        APIFlowCalls.insertPoseIntoFlows(flowsPose)
        .then(console.log('pose saved into flow'))
        .catch(err => {
            this.context.setError(err)
        })

        let savedPoseAttributes = {
            assigned_flow_id: currentFlowId,
            pose_id: poseId, 
        }
        const attributesList = this.makeAttributesList();
        savedPoseAttributes = {
            assigned_flow_id: currentFlowId,
            pose_id: poseId, 
            attributes: attributesList,
        }
        
        APIPoseCalls.insertPoseAttributes(savedPoseAttributes)
        .then(console.log('attributes saved'))
        .catch(err => {
            this.context.setError(err)
        })
        
        const note = {
            assigned_flow_id: currentFlowId,
            pose_id: poseId,
            notes: this.state.notes,
        };
        
        APIPoseCalls.insertPoseNotes(note)
        .then(console.log('note saved'))
        .catch(err => {
            this.context.setError(err)
        })

        this.props.history.push('/flow')
    }

    handleSavePoseAs = (e) => {
        const flowSectionid = e.target.value;
        this.setState({
            flowSection: flowSectionid,
        })
    };

    handleAddAttribute = (e) => {
        const attribute = e.target.name;
        const clickedAttribute = this.state[attribute]
        this.setState({
                [attribute]: !clickedAttribute,
        });
    }

    makeAttributesList = () => {
        let attributesList = [];
        for (let [key, value] of Object.entries(this.state)) {
            if (value === true ) {
                attributesList= [...attributesList, key]
            }
        }
        return attributesList;
    }
    
    handleNotes = (e) => {
       this.setState({
           notes: e.target.value
       })
    }



    render() {
       const {name_eng, name_san, benefits,pose_type, pose_level, img, video} = this.context.openPoseCard;
    
       return (
            <div>
                <h3>{name_eng}</h3>
                <h3>{name_san}</h3>
                <p>{benefits}</p>
                <p>{pose_level}</p>
                <p>{pose_type}</p>
                <img src={img} />
                <iframe width="560" height="315" src={video} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <form onSubmit={this.handleSubmit}>
                    <h3>Pick attributes:</h3>
                    <label>Grounding pose</label>
                    <input type='checkbox' name='grounding-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Cooling pose</label>
                    <input type='checkbox' name='cooling-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Heat rising pose</label>
                    <input type='checkbox' name='heat-rising-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Energizing pose</label>
                    <input type='checkbox' name='energizing-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Strengthening pose</label>
                    <input type='checkbox' name='strengthening-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Relaxing pose</label>
                    <input type='checkbox' name='relaxing-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Releasing preassure pose</label>
                    <input type='checkbox' name='releasing-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Stabilizing pose</label>
                    <input type='checkbox' name='stabilizing-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <label>Flexcibility building pose</label>
                    <input type='checkbox' name='flexibility-pose' onClick={this.handleAddAttribute} />
                    <br />
                    <br />
                    <select name='flow-menu' onChange={this.handleSavePoseAs}>
                        <option value='none'>Save to my flow as:</option>
                        <option value='1'>warm up pose</option>
                        <option value='3' >break pose</option>
                        <option value='4'>peak pose</option>
                        <option value='2'> mid-flow pose</option>
                        <option value='5' > after-peak stabilizing pose</option>
                    </select>
                    <br />
                    <h3>Notes</h3>
                    <textarea rows="10" cols='50' onChange={this.handleNotes} value={this.state.notes}></textarea>
                    <br />

                    <button type='submit'>Submit</button>
                </form>


            </div>

        )
    }

}