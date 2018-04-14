import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker'
import { Detail } from './Detail'
import {  WebView, ScrollView, View, Text, Image, StyleSheet} from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import WatchVideoCard from '../components/WatchVideoCard'
import Loading from '../components/Loading'
import { mapStateToProps } from './Detail'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<Detail />', () => {
  it('should render loading when video is still null ', () => {
    const redux = { video: null }
    const navigation  = { state: { params: { id: 1 } } }
    const wrapper = shallow(<Detail redux={redux} navigation={ navigation } getVideo={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <Loading />
    ])).toBe(true)
  })

  it('should render ScrollView and WatchVideoCard when video is not null ', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { video: item }
    const navigation  = { state: { params: { id: 1 } } }
    const wrapper = shallow(<Detail redux={redux} navigation={ navigation } getVideo={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <WatchVideoCard/>,
      <ScrollView />
    ])).toBe(true)
  })

  it('id should null if no id params in navigation ', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { video: item }
    const navigation  = { state: {  } }
    const wrapper = shallow(<Detail redux={redux} navigation={ navigation } getVideo={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <WatchVideoCard/>,
      <ScrollView />
    ])).toBe(true)
  })


  it('title bar should be Watch Video ', () => {
    const title = Detail.navigationOptions() 
    expect(title.title).toEqual('Watch Video')
  })

  it('mapStateToProps should return redux state ', () => {
    const state = mapStateToProps(state)
    expect(state).toHaveProperty('redux')
  })

})
