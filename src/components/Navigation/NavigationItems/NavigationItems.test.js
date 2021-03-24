import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    // creat wrapper outside of it functions so all have access to it
    let wrapper;

    // Function executed before each test to set it functions up 
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    // Test for rendering two NavigationItems when user is not authenticated
    it('should render two <NavigationItem /> if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    // Test for rendering three NavigationItems when user is authenticated
    it('should render three <NavigationItem /> if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    // Test for checking logout when user is authenticated
    it('should logout if authenticated', () => {
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});