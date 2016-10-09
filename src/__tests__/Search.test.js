/* eslint-disable no-unused-vars */
import React from 'react'
import { mount } from 'enzyme'
import Search from '../components/Search'

function setup() {
    const props = {
        onChange: jest.fn(),
        value: ''
    }

    const enzymeWrapper = mount(<Search {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('<Search/>', function () {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        const inputProps = enzymeWrapper.find('input').props()

        expect(enzymeWrapper.find('input').hasClass('search')).toBe(true)
        expect(enzymeWrapper.find('button').text()).toBe('Search GitHub')
        expect(inputProps.defaultValue).toEqual('')
        expect(inputProps.placeholder).toEqual('GitHub username')
    })

    it('should react on props change', function () {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('input').props().defaultValue).toEqual('')

        enzymeWrapper.setProps({ value: 'test' })

        expect(enzymeWrapper.find('input').props().defaultValue).toEqual('test')
    })

    it('should react on click', function () {
        const { enzymeWrapper, props } = setup()

        expect(props.onChange.mock.calls.length).toBe(0)

        enzymeWrapper.find('button').simulate('click')

        expect(props.onChange.mock.calls.length).toBe(1)
    })
})



/*
'use strict';

var React;
var ReactDOM;
var ReactDOMServer;
var ReactTestUtils;

describe('ReactTestUtils', () => {

  beforeEach(() => {
    React = require('React');
    ReactDOM = require('ReactDOM');
    ReactDOMServer = require('ReactDOMServer');
    ReactTestUtils = require('ReactTestUtils');
  });

  it('lets you update shallowly rendered components', () => {
    class SomeComponent extends React.Component {
      state = {clicked: false};

      onClick = () => {
        this.setState({clicked: true});
      };

      render() {
        var className = this.state.clicked ? 'was-clicked' : '';

        if (this.props.aNew === 'prop') {
          return (
            <a
              href="#"
              onClick={this.onClick}
              className={className}>
              Test link
            </a>
          );
        } else {
          return (
            <div>
              <span className="child1" />
              <span className="child2" />
            </div>
          );
        }
      }
    }

    var shallowRenderer = ReactTestUtils.createRenderer();
    var result = shallowRenderer.render(<SomeComponent />);
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual([
      <span className="child1" />,
      <span className="child2" />,
    ]);

    var updatedResult = shallowRenderer.render(<SomeComponent aNew="prop" />);
    expect(updatedResult.type).toBe('a');

    var mockEvent = {};
    updatedResult.props.onClick(mockEvent);

    var updatedResultCausedByClick = shallowRenderer.getRenderOutput();
    expect(updatedResultCausedByClick.type).toBe('a');
    expect(updatedResultCausedByClick.props.className).toBe('was-clicked');
  });

  it('can access the mounted component instance', () => {
    class SimpleComponent extends React.Component {
      someMethod = () => {
        return this.props.n;
      };

      render() {
        return <div>{this.props.n}</div>;
      }
    }

    var shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<SimpleComponent n={5} />);
    expect(shallowRenderer.getMountedInstance().someMethod()).toEqual(5);
  });

});

*/
