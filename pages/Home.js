import React, { Component} from 'react';
import { ActivityIndicator, View, Text, FlatList, Button, StyleSheet } from 'react-native'
import axios from '../axios'
import VideoCard from '../components/VideoCard'
import Loading from '../components/Loading'
import { getVideos } from '../store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Home extends Component {
 static navigationOptions = {
    title: 'Youtube Clone',
  };

  componentDidMount () {
    this.props.getVideos()
  }
  _renderItem = ({item}) => <VideoCard item={item} navigation={this.props.navigation} />

  render() {
    const { videos } = this.props.redux
    if (!videos.length) {
      return <Loading />
    }
    return (
      <View style={{ padding: 16 }}>
        <FlatList 
          data={videos}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    redux: state
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({getVideos}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
