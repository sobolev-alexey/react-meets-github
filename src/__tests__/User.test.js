/* eslint-disable no-unused-vars */
import React from 'react'
import { shallow } from 'enzyme'
import User from '../components/User'

function setup() {
    const props = {
        user: {
            login: 'test_login',
            avatarUrl: 'http://site.com/sample.jpg',
            name: 'Test Name'
        }
    }

    const enzymeWrapper = shallow(<User {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('<User/>', function () {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('img').hasClass('avatar')).toBe(true)
        expect(enzymeWrapper.find('span.login').text()).toBe('(test_login)')
    })
})
