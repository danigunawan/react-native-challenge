import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getVideos } from '../store/actions'

export const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  },
  },{
    initialRouteName: 'Home',
});

class Navigator extends React.Component {
  render() {
    return (
        <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    redux: state
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({getVideos}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
