import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import RegisterPage from './RegisterPage';
import {BrowserRouter as BR} from 'react-router-dom';

describe('RegisterPage component', () => {
    const props = {match: {params: {path: '/register'}}};
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><RegisterPage {...props} /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const registerPage = renderer.create(<BR><RegisterPage /></BR>);
        expect(registerPage.toJSON()).toMatchSnapshot();
    });
});
