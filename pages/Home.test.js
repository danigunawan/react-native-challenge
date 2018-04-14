import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import faker from 'faker'
import { TextInput, View, Text, FlatList, Button, StyleSheet } from 'react-native'
import {Home} from './Home'
import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import { mapStateToProps } from './Home.js'
import VideoCard from '../components/VideoCard'



// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


describe('<Home />', () => {
  it('should render loading when videos is still 0 ', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { videos: [], searchVideos: [] }
    const navigation =  { navigate: () => {} }
    const wrapper = shallow(<Home redux={redux} getVideos={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <Loading />
    ])).toBe(true)
  })

  it('should set videos value to searchVideos when the searchVideos is not null', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { videos: [], searchVideos: [item] }
    const navigation =  { navigate: () => {} }
    const wrapper = shallow(<Home redux={redux} getVideos={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <SearchForm />,
      <FlatList />
    ])).toBe(true)

  }) 
  it('should render SearchForm and FlatList when videos length is not 0', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { videos: [item], searchVideos: [] }
    const navigation =  { navigate: () => {} }
    const wrapper = shallow(<Home redux={redux} getVideos={ () => {} }   />)

    expect(wrapper.containsAnyMatchingElements([
      <SearchForm />,
      <FlatList />
    ])).toBe(true)

  })

  it('title bar should be Youtube Clone ', () => {
    const title = Home.navigationOptions() 
    expect(title.title).toEqual('Youtube Clone')
  })

  it('mapStateToProps should return redux state ', () => {
    const state = mapStateToProps(state)
    expect(state).toHaveProperty('redux')
  })

  it('_renderItem function should return VideoCard', () => {
    const item = {
        id: 1,
        type: 'video',
        thumbnails: { medium: { url: faker.image.imageUrl()  } },
        title: 'Hallo',
        description: 'Hallo WKWK',
        channel: { title: 'hai' },
        duration: { hours: 2, minutes: 3 }
    }
    const redux = { videos: [item], searchVideos: [] }
    const items = { item: item }
    const navigation =  { navigate: () => {} }

    const wrapper = shallow(<Home redux={redux} getVideos={ () => {} }   />)
    expect(wrapper.instance()._renderItem(items)).toEqual(<VideoCard item={items.item} navigation={undefined} />)
     
  })

})
