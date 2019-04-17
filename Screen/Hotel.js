import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image, RefreshControl } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'

export default class Hotel extends React.Component {

  static navigationOptions = {
    title: 'Hotel'
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refresh:false,
      config: "192.168.42.89:3000/",
    };
    thisState = this;
    fetch(`http://${this.state.config}hotelapp`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          data: responseJson
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  refresh(){
    this.setState({
      refresh: true
    });

    fetch(`http://${this.state.config}hotelapp`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          data: responseJson,
          refresh: false
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
        <FlatList
        refreshing  = {this.state.refresh}
        onRefresh = {()=>{this.refresh()}}
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.container}>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('Room',
                { thamso: item._id, thamso2: item.room_image })}>

                <View style={styles.container2}>

                  <View style={styles.information} >

                    <Image style={styles.avatar} source={{ uri: `http://${this.state.config}${item.hotel_image}` }} />
                    <View style={{ flexDirection: 'column', marginLeft: 10}}>
                      <Text style={styles.hotel_name}>{item.hotel_name}</Text>
                      <Text style={styles.hotel_owner}>{item.hotel_owner}</Text>
                    </View>

                  </View>
                  
                  <View style={styles.post}>
                    <Text multiline={true} style={{ opacity: 0.7, marginBottom: 10 }}>Total Floor : {item.hotel_total_floor}</Text>
                    <FullWidthImage style={styles.images} source={{ uri: `http://${this.state.config}${item.hotel_image}` }}/>
                  </View>
                  <View style={styles.license_number}>
                    <Text style={styles.hotel_license_number}>License Number : {item.hotel_license_number}</Text>
                  </View>

                  <View style={styles.address}>
                    <Text style={styles.hotel_owner}>{item.hotel_address}</Text>
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
    //490
  },
  information: {
    width: '90%',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  hotel_name: {
    fontSize: 13,
    opacity: 0.5,
    fontWeight: 'bold',
  },
  hotel_owner: {
    fontSize: 11,
    opacity: 0.5,
  },
  avatar: {
    width: 38,
    borderRadius: 100,
    height: 38,
  },
  icons: {
    width: 24,
    marginLeft: 5,
    height: 24,
    opacity: 0.4,
  },
  post: {
    width: '90%',
    marginLeft:20,
    marginRight:20
    //290
  },
  images: {
    width: '100%',
    borderRadius: 5,
  },
  license_number: {
    flexDirection: 'row',
    paddingVertical: 10,
    width: '90%',
    marginTop: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d1d2d4'
  },
  
  hotel_license_number: {
    fontSize: 12,
    opacity: 0.3,
  },
  address: {
    width: '90%',
    marginTop:5,
    marginBottom:5
  },
});
