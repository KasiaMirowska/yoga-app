import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import LoginForm from './LoginForm';
import {BrowserRouter as BR} from 'react-router-dom';

describe('LoginForm component', () => {
    const props = {match: {params: {path: '/login'}}};
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><LoginForm {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const loginPage = renderer.create(<BR><LoginForm/></BR>);
        expect(loginPage.toJSON()).toMatchSnapshot();
    });
});