import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import PoseList from './PoseList/PoseList';
import PoseFullCard from './PoseFullCard/PoseFullCard';
import OpeningForm from './OpeningForm/OpeningForm';
import CurrentFlow from './CurrentFlow/CurrentFlow';
import FlowPosesList from './FlowPosesList/FlowPosesList';

export default class App extends React.Component {
  
  

  render() {
    return (
      <div className="App">
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
            <Route exact path ='/flow' component={FlowPosesList} />
            <Route exact path='/flow' component={PoseList} />
           
            <Route exact path='/flow/:pose_id' component={CurrentFlow} />
            <Route exact path='/flow/:pose_id' component={PoseFullCard} />
          </main>

      </div>
    );
  }

}


