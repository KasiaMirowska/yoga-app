import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import PoseList from './PoseList/PoseList';
import STORE from './store';
import Context from './Context';
import PoseFullCard from './PoseFullCard/PoseFullCard';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        poses: STORE.poses,
        flows: STORE.flows
    }
}


  render() {
    const contextValue = {
      poses: this.state.poses,
      flows: this.state.flows
  }
  console.log(this.state.poses)

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
         
         <Route exact path='/' component={PoseList} />
         <Route exact path='/pose/:pose_id' component={PoseFullCard} />
        </main>

        </Context.Provider>

      </div>
    );
  }

}


