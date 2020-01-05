import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import FlowItem from './FlowItem';
import {BrowserRouter as BR} from 'react-router-dom';

describe('FlowItem component', () => {
    let props = {
        flowId: 1,
        poseId: 1,
        history: {location: {pathname: `/flow/1/pose/1}`}},
        
    }
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><FlowItem {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const item= renderer.create(<BR><FlowItem {...props} /></BR>);
        expect(item.toJSON()).toMatchSnapshot();
    })

})