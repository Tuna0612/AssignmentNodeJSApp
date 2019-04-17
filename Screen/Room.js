import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image } from 'react-native';

import FullWidthImage from 'react-native-fullwidth-image'

export default class Room extends React.Component {

  static navigationOptions = {
    title: 'Room',
  }
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      config: "192.168.42.89:3000/"
    };
    fetch(`http://${this.state.config}infroom/${this.props.navigation.state.params.thamso}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          items: responseJson
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <FlatList style={{ marginBottom: 2, marginTop: 2 }}
          data={this.state.items}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail',
                {
                  thamso: item._id,
                  thamso2: item.room_number,
                  thamso3: item.room_image,
                  thamso4: item.room_floor,
                  thamso5: item.room_single,
                  thamso6: item.room_price,
                  thamso7: item.room_status,
                  thamso8: item.room_detail,
                })}>
                <View style={styles.container2}>
                  <View style={styles.post}>
                    <Text multiline={true} style={{ fontSize: 15, color: '#000', margin: 10 }}>Room Number : {item.room_number}</Text>
                    <FullWidthImage style={styles.images} source={{ uri: `http://${this.state.config}${item.room_image}` }}/>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          }
          keyExtractor={(item) => item._id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d1d2d4',
    alignItems: 'center',
    paddingTop: 5,
    justifyContent: 'center',
    width: '100%'
  },
  container2: {
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: 385,
    borderRadius: 5,
  },
  post: {
    width: '90%',
    marginLeft:20,
    marginRight:20,
    marginBottom:20
  },
  images: {
    width: '100%',
    borderRadius: 5,
  },
});