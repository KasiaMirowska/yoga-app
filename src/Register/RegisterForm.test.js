import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import RegisterForm from './RegisterForm';
import {BrowserRouter as BR} from 'react-router-dom';

describe('RegisterForm component', () => {
    const props = {match: {params: {path: '/register'}}};
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><RegisterForm {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const register = renderer.create(<BR><RegisterForm /></BR>);
        expect(register.toJSON()).toMatchSnapshot();
    });
});
