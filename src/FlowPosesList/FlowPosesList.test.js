import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import FlowPosesList from './FlowPosesList';
import {BrowserRouter as BR} from 'react-router-dom';

describe('FlowPosesList component', () => {
    const props = {match: {params: {path: '/flow'}}}
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><FlowPosesList {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const loginPage = renderer.create(<BR><FlowPosesList {...props}/></BR>);
        expect(loginPage.toJSON()).toMatchSnapshot();
    })

})