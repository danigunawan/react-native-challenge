import ReactDOM from 'react-dom';
import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {View, Text, Image, Button, TouchableHighlight} from 'react-native'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import VideoCard from './VideoCard'
import faker from 'faker'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<VideoCard />', () => {
  it('should render VideoCard correctly ', () => {
    const item = {
        id: 1,
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        channel: { title: 'hai' }
    }
    const navigation =  { navigate: () => {} }
    const wrapper = shallow(<VideoCard item={item} navigation={navigation} />)

    expect(wrapper.containsAnyMatchingElements([
      <CardTitle >
        <Text style={{ fontSize: 18 }}> { item.title } </Text>
      </CardTitle>,
      <CardContent>
        <Text> { item.channel.title ? item.channel.title : '' } </Text>
      </CardContent>,
      <CardAction >
        <Button title="Watch" onPress={ () => navigation.navigate('Detail', {id: item.id}) } />
      </CardAction>,
      <TouchableHighlight onPress={() => navigation.navigate('Detail', {id: item.id})}>
      </TouchableHighlight>
    ])).toBe(true)
  })

  it('should handle onPress when press TouchableHighlight ', () => {
    const item = {
        id: 1,
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        channel: { title: 'hai' }
    }
    const navigation =  { navigate: () => true }
    const wrapper = shallow(<VideoCard item={item} navigation={navigation} />)
    expect(wrapper.find(TouchableHighlight).first().props().onPress()).toBe(true)
  })

  it('should handle onPress when press Watch Button ', () => {
    const item = {
        id: 1,
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        channel: { title: 'hai' }
    }
    const navigation =  { navigate: () => true }
    const wrapper = shallow(<VideoCard item={item} navigation={navigation} />)
    expect(wrapper.find(Button).first().props().onPress()).toBe(true)
  })
})
