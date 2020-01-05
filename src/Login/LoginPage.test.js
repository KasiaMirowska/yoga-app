import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import LoginPage from './LoginPage';
import {BrowserRouter as BR} from 'react-router-dom';

describe('LoginPage component', () => {
    // const props = {match: {params: {path: '/login'}}}
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><LoginPage /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const loginPage = renderer.create(<BR><LoginPage /></BR>);
        expect(loginPage.toJSON()).toMatchSnapshot();
    })

})