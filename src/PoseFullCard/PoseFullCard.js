import React from 'react';
import Context from '../Context';

export default class PoseFullCard extends React.Component {
    static contextType = Context;

    render() {
        const { pose_id } = this.props.match.params;
        const pose = this.context.poses.find(pose => pose.id == pose_id)

        return (
            <div>
                <h3>{pose.nameEng}</h3>
                <h3>{pose.nameSan}</h3>
                <p>{pose.benefits}</p>
                <p>{pose.level}</p>
                <p>{pose.poseType}</p>
                <img src={pose.img} />
                <iframe width="560" height="315" src={pose.utube} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                <form>
                    <h3>Pick attributes:</h3>
                    <label>Grounding pose</label>
                    <input type='checkbox' value='grounding pose'/>
                    <br/>
                    <label>Cooling pose</label>
                    <input type='checkbox' value='cooling-pose'/>
                    <br/>
                    <label>Heat rising pose</label>
                    <input type='checkbox' value='heat-pose'/>
                    <br/>
                    <label>Energizing pose</label>
                    <input type='checkbox' value='energizing-pose'/>
                    <br/>
                    <label>Strengthening pose</label>
                    <input type='checkbox' value='strengthening-pose'/>
                    <br/>
                    <label>Relaxing pose</label>
                    <input type='checkbox' value='relaxing-pose'/>
                    <br/>
                    <label>Releasing preassure pose</label>
                    <input type='checkbox' value='releasing-pose'/>
                    <br/>
                    <label>Stabilizing pose</label>
                    <input type='checkbox' value='stabilizing-pose'/>
                    <br/>
                    <label>Flexcibility building pose</label>
                    <input type='checkbox' value='flexibility-pose'/>
                    
                    <br/>
                    <h3>Notes</h3>
                    <textarea rows="10" cols='50'></textarea>
                    <br />
                    <select name='flow-menu'>
                        <option value='none'>Save to my flow as:</option>
                        <option value='warm-up'>warm up pose</option>
                        <option value='break'>break pose</option>
                        <option value='peak'>peak pose</option>
                        <option value='mid-flow'> mid-flow pose</option>
                        <option value='after-peak'> after-peak stabilizing pose</option>
                    </select>
                    <p>Name of the flow:</p>
                    <select name='flow-record'>
                        <option value='new'>Create a new flow</option>
                    </select>
                    <input type='text' placeholder="new flow name"></input>
                    <button type='submit'>
                        <a href='flow.html'>SAVE</a>
                    </button>
                </form>


            </div>

        )
    }

}