import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Nav from './Nav';
import {BrowserRouter as BR} from 'react-router-dom';

describe('Nav component', () => {
    it('renders without crashing', () => {
         const div = document.createElement('div');
         ReactDom.render(<BR><Nav /></BR>, div);
         ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const nav = renderer.create(<BR><Nav /></BR>);
        expect(nav.toJSON()).toMatchSnapshot();
    });
});
