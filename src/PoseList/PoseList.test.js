import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PoseList from './PoseList';
import {BrowserRouter as BR } from 'react-router-dom';


describe('PoseList component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><PoseList /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const list = renderer.create(<BR><PoseList /></BR>);
        expect(list.toJSON()).toMatchSnapshot();
    })
})