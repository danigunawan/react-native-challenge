import React, { Component} from 'react';
import {  WebView, ScrollView, View, Text, Image, StyleSheet, ActivityIndicator, Button } from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
import axios from '../axios'
import WatchVideoCard from '../components/WatchVideoCard'
import Loading from '../components/Loading'
import { getVideo } from '../store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Detail extends Component {

 static navigationOptions = {
    title: 'Watch Video',
  };

  componentDidMount () {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    this.props.getVideo(id)
  }

  render() {
    const { video } = this.props.redux
    const item = video
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;

    if (!item) {
      return <Loading/> 
    }
    return (
      <ScrollView>
        <WatchVideoCard item={ item } id={id} />
      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    redux: state
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({getVideo}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
