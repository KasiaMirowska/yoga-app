import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PoseFullCard from './PoseFullCard';
import {BrowserRouter as BR} from 'react-router-dom';

describe('PoseFullCard component', () => {
    const props = {match: {params: {pose_id: 1}}}
    it('renders without crashing', () => {
         const div = document.createElement('div');
         ReactDom.render(<BR><PoseFullCard {...props} /></BR>, div);
         ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const card = renderer.create(<BR><PoseFullCard {...props} /></BR>)
        expect(card.toJSON()).toMatchSnapshot();
    })
})