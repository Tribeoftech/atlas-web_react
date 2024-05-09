require('jsdom-global')();
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// Configure Enzyme with the adapter
Enzyme.configure({ adapter: new Adapter() });