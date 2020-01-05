import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import OpeningForm from './OpeningForm';
import {BrowserRouter as BR } from 'react-router-dom';


describe('OpeningForm component', () => {
    const home = {match: {params: {path: '/'}}};
    const loggedIn = {match: {params: {path: '/flowForm'}}};
    const token = {key: 'abcd'};
    const choosePath = (token) => {
        let props;
        if(!token) {
            props = home;
        } else {
            props = loggedIn
        }
    }
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><OpeningForm {...choosePath()}/></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const form = renderer.create(<BR><OpeningForm {...choosePath()}/></BR>);
        expect(form.toJSON()).toMatchSnapshot();
    })
})