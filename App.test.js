import React from 'react';
import App from './App';
import Navigator from './navigator/AppNavigator'
import { Provider } from 'react-redux'
import store from './store'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  it('Should Render provider and Navigator', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.containsAnyMatchingElements([
      <Navigator />,
      <Provider />
    ])).toBe(true)
  });
})
