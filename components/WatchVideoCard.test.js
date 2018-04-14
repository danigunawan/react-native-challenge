import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {  WebView, ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import WatchVideoCard from './WatchVideoCard'
import faker from 'faker'
import { styles } from './WatchVideoCard.js'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<WatchVideoCard />', () => {
  it('should render WatchVideoCard correctly ', () => {
    const item = {
        id: 1,
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const navigation =  { navigate: () => {} }
    const wrapper = shallow(<WatchVideoCard item={item} id={ item.id } navigation={navigation} />)

    expect(wrapper.containsAnyMatchingElements([
      <CardTitle >
        <Text style={{ fontSize: 18 }}> { item.title } </Text>
      </CardTitle>,
      <CardContent>
        <Text style={ styles.channelTitle }> By: { item.channel.title } </Text>
        <Text> { item.description } </Text>
        <Text> { item.duration.hours + item.duration.minutes} </Text>
      </CardContent>,
      <WebView
      style={{width: '100%', height: 200}}
      javaScriptEnabled={true}
      source={{uri: `https://www.youtube.com/embed/${item.id}?rel=0&autoplay=0&showinfo=0&controls=0`}}
      />
    ])).toBe(true)
  })

})
