import React from 'react';
import {View, Text, Image, Button} from 'react-native'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';


function VideoCard(props) {
  const { item  } = props
  return (
    <View>
      <Card >
        <Image source={{ uri: item.thumbnails.medium.url }} style={{ width: '100%', height: 100 }} />
        <CardTitle >
          <Text style={{ fontSize: 18 }}> { item.title } </Text>
        </CardTitle>
        <CardContent>
          <Text> { item.channel.title } </Text>
        </CardContent>
        <CardAction >
          <Button title="Watch" onPress={ () => props.navigation.navigate('Detail', {id: item.id}) } />
        </CardAction>
      </Card>
    </View>
  );
}


export default VideoCard;
