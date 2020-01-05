import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import CurrentFlow from './CurrentFlow';
import {BrowserRouter as BR} from 'react-router-dom';

describe('CurrentFlow component', () => {
    
    it ('renders without crashing',() => {
        const div = document.createElement('div');
        ReactDom.render(<BR><CurrentFlow /></BR>, div);
        ReactDom.unmountComponentAtNode(div);
    });
    it('renders UI as expected', () => {
        const loginPage = renderer.create(<BR><CurrentFlow /></BR>);
        expect(loginPage.toJSON()).toMatchSnapshot();
    })

})