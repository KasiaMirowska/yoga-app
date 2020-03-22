import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import PoseListItem from './PoseListItem';
import {BrowserRouter as BR} from 'react-router-dom';

describe('PoseListItem component', () => {
    const props = {
        name: 'chair',
        sanskrit: 'utkatasana',
        img: '',
        location: {pathname: '/'},
        history: {push : '/'}
    };

    it('renders without crashing', () => {
         const div = document.createElement('div');
         ReactDom.render(<BR><PoseListItem {...props} /></BR>, div);
         ReactDom.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const item = renderer.create(<BR><PoseListItem {...props}/></BR>)
        expect(item.toJSON()).toMatchSnapshot();
    });
});
