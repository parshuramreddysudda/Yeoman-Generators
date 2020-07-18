import React from 'react'
import <%= componentUpper %>  from './<%= componentUpper %> '
import { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Testing <%= componentUpper %>s Component', () => {

    test('should handle <%= componentUpper %> compoent', () => {

    });

})

