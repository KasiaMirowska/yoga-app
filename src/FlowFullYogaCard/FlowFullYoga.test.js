import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import FlowFullYogaCard from './FlowFullYogaCard';
import {BrowserRouter as BR} from 'react-router-dom';

describe('FlowFullYogaCard component', () => {
    let props = {
        location: { pathname: '/flow'},
        history: {location: {pathname: '/flow'}},
        match: {params: {pose_id: 1}}
    };
   
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><FlowFullYogaCard {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
   
    it('renders UI as expected', () => {
        const fullCard = renderer.create(<BR><FlowFullYogaCard {...props} /></BR>);
        expect(fullCard.toJSON()).toMatchSnapshot();
    });
});