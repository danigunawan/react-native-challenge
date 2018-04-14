import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {SearchForm} from './SearchForm'
import { View, Button, TextInput } from 'react-native'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<SearchForm />', () => {
  it('should render Search form without clear button ', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.containsAnyMatchingElements([
      <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 8, padding: 6}}
        placeholder="Search Video Here"
      />,
      <Button
        title="Search"
      />
    ])).toBe(true)
  })

  it('should render Search form with clear button ', () => {
    const wrapper = shallow(<SearchForm />)
    wrapper.setState({text: 'test'})
    expect(wrapper.containsAnyMatchingElements([
      <TextInput
        style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 8, padding: 6}}
        placeholder="Search Video Here"
      />,
      <Button
        title="Search"
      />,
      <Button
        title="Clear"
      />
    ])).toBe(true)
    expect(  wrapper.find('TextInput')
      .first()
      .props()
      .value
    ).toEqual('test')
  })

  it('should change value of TextInput and text state when onChangeText ', () => {
    const wrapper = shallow(<SearchForm />)
    wrapper.find(TextInput).first().props().onChangeText('test')
    expect( wrapper.update().find('TextInput')
      .first()
      .props()
      .value
    ).toEqual('test')
    expect( wrapper.update().state('text')   ).toEqual('test')
  })

  it('should dispatch searchVideo when press button search', () => {
    const clearSearch = () => true
    const searchVideos = () => true

    const wrapper = shallow(<SearchForm clearSearch={clearSearch} searchVideos={searchVideos} />)
    wrapper.setState({text: 'test'})
    expect(wrapper.find(Button).first().props().onPress()).toBe(true)
  })

  it('should dispatch clearSearch and make text state to null string when press button clear', () => {
    const clearSearch = () => true
    const searchVideos = () => true

    const wrapper = shallow(<SearchForm clearSearch={clearSearch} searchVideos={searchVideos} />)
    wrapper.setState({text: 'test'})
    wrapper.find(Button).at(1).props().onPress()
    expect(wrapper.update().state('text')).toEqual('')
  })
})
