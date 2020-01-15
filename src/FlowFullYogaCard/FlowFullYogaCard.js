import React from 'react';
import YogaContext, { YogaContextProvider } from '../Context';
import APIPoseCalls from '../services/API_Pose_service';
import './FlowFullYogaCard.css';


export default class FlowFullYogaCard extends React.Component {
    static contextType = YogaContext;
    state = {
        clickedPose: null,
        error: null,
    }

    componentDidUpdate = () => {
        if (this.props.history.location.pathname !== this.state.clickedPose) {
            this.getFullPoseInfo()
        }
    }
    getFullPoseInfo = () => {

        const flowId = this.context.currentFlowId;
        const clickedPoseId = Number(this.props.match.params.pose_id);
        const clickedPosePath = this.props.location.pathname;

        this.setState({
            clickedPose: clickedPosePath,
        })


        APIPoseCalls.getFullPoseData(flowId, clickedPoseId)
            .then(data => {
                this.context.setOpenPoseCard(data)
            })
            .catch(res => {
                this.setState({
                    error: res,
                })
            })
    }

    componentDidMount = () => {
        this.getFullPoseInfo()
    }

    handleBackButton = () => {
        this.props.history.push('/flow')
    }

    render() {
        const { name_eng, name_san, benefits, pose_type, pose_level, img, video, attributesList, notes } = this.context.openPoseCard;

        if (attributesList || notes) {
            const list = attributesList.map((att, index) => {
                return (
                    <li key={index}>{att}</li>
                )
            });
            const poseNotes = notes.map((n, index) => {
                return (
                    <li key={index}>{n}</li>
                )
            })
            return (
                <div className='pose-info'>
                    <div className='error'>
                        {this.state.error ? this.state.error.message : null}
                    </div>
                    <h3 className='title' >{name_eng}</h3>
                    <h3 className='title'>{name_san}</h3>
                    <div className='text-container2'>
                        <p>BENEFITS : {benefits}</p>
                        <br />
                        <p>LEVEL : {pose_level}</p>
                        <br />
                        <p>POSE TYPE : {pose_type}</p>
                        <br />
                    </div >
                    <div className='iframe-container'>
                    <iframe className='resp-iframe' src={video} frameBorder="0" title='yoga pose instructions'
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    </div>
                    <h3 className='title' >Saved Attributes List : </h3>
                    <div className='attributes-container'>
                        <ul>
                            {list}
                        </ul>
                    </div>

                    <h3 className='title' >Notes: </h3>
                    <div className='note-container'>
                        <ul>
                            {poseNotes}
                        </ul>
                    </div>
                    <button className='bt-container' onClick={this.handleBackButton} >Back</button>

                </div >
            )

        }
        return (

            <div className='pose-info'>
                <h3 className='title' >{name_eng}</h3>
                <h3 className='title'>{name_san}</h3>
                <div className='text-container'>
                    <p>BENEFITS : {benefits}</p>
                    <br />
                    <p>LEVEL : {pose_level}</p>
                    <br />
                    <p>POSE TYPE : {pose_type}</p>
                    <br />
                </div>
                <div className='iframe-container'>
                <iframe src={video} className='resp-iframe' frameBorder="0" title='yoga pose instructions'
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                </div>
                <div className='bt-container'>
                    <button onClick={this.handleBackButton} >Back</button>
                </div>

            </div>
        );



    }
}