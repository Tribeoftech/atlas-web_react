import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders three list items
  it('renders a div with class App-header', () => {
    wrapper.update();
    const listItems = wrapper.find('li');
    expect(listItems.length).toBe(3);
  });

  // Test that Notifications renders the correct text
  it('renders a div with class App-body', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toEqual('Here is the list of notifications');
  });
});