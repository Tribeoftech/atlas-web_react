// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
require('jsdom-global')();
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17';

// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });