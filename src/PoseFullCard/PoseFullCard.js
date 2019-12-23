import React from 'react';
import YogaContext from '../Context';
import cuid from 'cuid';
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

    //have to make a call to get/id endpoint
    
    
    // componentDidMount = (authToken) => {
    //     const token = TokenService.hasAuthToken(config.TOKEN_KEY)
    //     if (!token) {
    //         console.log('NO TOKEN')
    //         this.props.history.push(`/login`)
    //     } else {
    //         console.log('will see full card')
    //     }

    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const { pose_id } = this.props.match.params;
        const poseId = Number(pose_id);
        const {currentFlow} = this.context;
        const { savedPosesIds, peakPose, warmUp, midFlow,breakPoses, afterPeak } = currentFlow
       
        const updatedFlow = {
            id: currentFlow.id,
            name: currentFlow.name,
            savedPosesIds: [...savedPosesIds, poseId],
            peakPose: [...peakPose],
            warmUp: [...warmUp],
            midFlow: [...midFlow],
            breakPoses: [...breakPoses],
            afterPeak: [...afterPeak],  
        }
         
        const newPoseAttributes = {
            id: cuid(),
            poseId,
            assignedFlowId: this.context.currentFlow.id,
            attributesList: this.makeAttributesList(),
            notes: this.state.notes,
        }
        
        this.context.updateFullFlow(poseId,
            updatedFlow, this.state.flowSection)
        this.context.updateAttributes(newPoseAttributes)
        this.props.history.push('/flow')
    }

    handleSavePoseAs = (e) => {
        const flowSectionName = e.target.value;
        this.setState({
            flowSection: flowSectionName,
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
        const { pose_id } = this.props.match.params;
        console.log(this.context)
        const pose = this.context.poses.find(pose => {

            console.log(pose.id, 'LLLLL', pose_id)
            return pose.id === Number(pose_id)
        })
        return (
            <div>
                <h3>{pose.nameEng}</h3>
                <h3>{pose.nameSan}</h3>
                <p>{pose.benefits}</p>
                <p>{pose.level}</p>
                <p>{pose.poseType}</p>
                <img src={pose.img} />
                <iframe width="560" height="315" src={pose.video} frameBorder="0"
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
                        <option value='warmUp'>warm up pose</option>
                        <option value='breakPoses'>break pose</option>
                        <option value='peakPose'>peak pose</option>
                        <option value='midFlow'> mid-flow pose</option>
                        <option value='afterPeak'> after-peak stabilizing pose</option>
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