import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import PoseList from './PoseList/PoseList';
import STORE from './store';
import Context from './Context';
import PoseFullCard from './PoseFullCard/PoseFullCard';
import OpeningForm from './OpeningForm/OpeningForm';
import CurrentFlow from './CurrentFlow/CurrentFlow';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentFlow: null,
      poses: STORE.poses,
      flows: STORE.flows,
      poseAttributes: STORE.attributes
    }
  }
  enterFlow= (flow) => {
    this.setState({
      currentFlow: flow,
    })
  }
  
  addFlow = (newFlow) => {
    this.setState({
      flows: [...this.state.flows, newFlow],
      currentFlow: newFlow,
    })
  }


  
  updateFlow = (updatedFlow) => {
    console.log(updatedFlow)
    this.setState({
      currentFlow: updatedFlow,
    })
  }
  
  setPoseInFlowSection(pose, flow, sectionName){
    const flowSection = flow[sectionName];
    const newFlowSection = [...flowSection, pose];
    const updatedFlow = {...flow, [sectionName]: newFlowSection};
    console.log(updatedFlow)
    this.setState({
      currentFlow: updatedFlow
    });
}
  

  updateAttributes = (updatedAttributes) => {
    console.log(updatedAttributes)
    this.setState({
      poseAttributes: updatedAttributes,
    })
  }

  render() {
    const contextValue = {
      currentFlow: this.state.currentFlow,
      poses: this.state.poses,
      flows: this.state.flows,
      addFlow: this.addFlow,
      enterFlow: this.enterFlow,
      updateFlow: this.updateFlow,
      updateAttributes: this.updateAttributes,
      setPoseInFlowSection: this.setPoseInFlowSection,
      poseAttributes: this.state.poseAttributes,
    }
   
    
    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <Nav />
          <header>
            <Link to={'/'}>
              <h1>YOGA TRACK</h1>
            </Link>
          </header>
          <main>
            <Route exact path='/' component={OpeningForm} />
            <Route exact path='/' component={PoseList} />
            
            <Route exact path='/flow' component={CurrentFlow} />
            <Route exact path='/flow' component={PoseList} />
           
            <Route exact path='/flow/:pose_id' component={CurrentFlow} />
            <Route exact path='/flow/:pose_id' component={PoseFullCard} />
          </main>

        </Context.Provider>

      </div>
    );
  }

}


