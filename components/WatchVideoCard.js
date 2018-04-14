import React from 'react';
import {  WebView, ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import {
  Card,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';


function WatchVideoCard(props) {
  const { item , id} = props
  return (
    <View style={{ padding: 16 }}>
        <WebView
        style={{width: '100%', height: 200}}
        javaScriptEnabled={true}
        source={{uri: `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&showinfo=0&controls=0`}}
        />
      <Card >
        <CardTitle >
          <Text style={styles.title}> { item.title } </Text>
        </CardTitle>
        <CardContent>
          <Text style={ styles.channelTitle }> By: { item.channel.title } </Text>
          <Text> { item.description } </Text>
          <Text> { item.duration.hours + item.duration.minutes} </Text>
        </CardContent>
      </Card>
        
    </View>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 18, 
    fontWeight: 'bold'
  },
  channelTitle: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold' 
  }
})

export default WatchVideoCard;
