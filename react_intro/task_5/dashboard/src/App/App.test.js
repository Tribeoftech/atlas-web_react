// USING REACT TESTING LIBRARY DUE TO ENZYME INCOMPATIBILITY WITH REACT 18
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('App component renders', () => {
//   render(<App />);
//   const headerDiv = screen.getByTestId('App-header');
//   expect(headerDiv).toBeInTheDocument();
// });

// USING ENZYME

import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // Test that App renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-header
  it('renders a div with class App-header', () => {
    wrapper.update();
    const headerDiv = wrapper.find('.App-header');
    expect(headerDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-body
  it('renders a div with class App-body', () => {
    wrapper.update();
    const bodyDiv = wrapper.find('.App-body');
    expect(bodyDiv.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-footer
  it('renders a div with class App-footer', () => {
    wrapper.update();
    const footerDiv = wrapper.find('.App-footer');
    expect(footerDiv.exists()).toBe(true);
  });
});
