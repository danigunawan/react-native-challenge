import React, { Component} from 'react';
import { TextInput, View, Text, FlatList, Button, StyleSheet } from 'react-native'
import axios from '../axios'
import VideoCard from '../components/VideoCard'
import Loading from '../components/Loading'
import { getVideos, searchVideos, clearSearch } from '../store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchForm from '../components/SearchForm'

class Home extends Component {

  state = {
    nav: null,
    text: ''
  }

  static navigationOptions = () => {
    
   return  {
      title: 'Youtube Clone',
    }
  } 

  componentDidMount () {
    
    this.setState({nav: this.props.navigation})
    this.props.getVideos()
  }
  _renderItem = ({item}) => <VideoCard item={item} navigation={this.props.navigation} />

  render() { 
    let { videos, searchVideos } = this.props.redux
    _keyExtractor = (item, index) => item.id;
    videos = videos.filter(video => video.type === 'video')
    if (searchVideos.length) {
      videos = searchVideos.filter(video => video.type === 'video')
    }
    if (!videos.length) {
      return <Loading />
    } else {
      return (
        <View style={{ padding: 16 }}>
          <SearchForm />
            <FlatList 
              data={videos}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
        </View>
      );
   } 
  }
}

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({getVideos, searchVideos, clearSearch}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
