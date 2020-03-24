import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import OpeningForm from './OpeningForm';
import {BrowserRouter as BR } from 'react-router-dom';


describe('OpeningForm component', () => {
    const props = {
        location: {
            pathname: '/',
        }
    };

    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<BR><OpeningForm {...props}/></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const form = renderer.create(<BR><OpeningForm {...props}/></BR>);
        expect(form.toJSON()).toMatchSnapshot();
    });
});
