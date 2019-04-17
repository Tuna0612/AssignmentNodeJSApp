import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Detail extends React.Component {

  static navigationOptions = {
    title: 'Detail',
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      config: "192.168.42.89:3000/",
      title: 'Hotel',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewsImage}>
          <View style={styles.container2}>
            <View style={styles.statuss}>
              <Text multiline={true} style={styles.textlogo}>Room Number : {this.props.navigation.state.params.thamso2}</Text>
              <Image style={styles.images} source={{ uri: `http://${this.state.config}${this.props.navigation.state.params.thamso3}` }} />
            </View>
          </View>
          <Text style={styles.textstatus}>Floor : {this.props.navigation.state.params.thamso4}</Text>
          <Text style={styles.textstatus}>Kind : {this.props.navigation.state.params.thamso5}</Text>
          <Text style={styles.textstatus}>Price : {this.props.navigation.state.params.thamso6} VNĐ</Text>
          <Text style={styles.textstatus}>Status : {this.props.navigation.state.params.thamso7}</Text>
          <Text style={styles.textstatus}>Detail : {this.props.navigation.state.params.thamso8}</Text>
          <View style={styles.view_google_face}>
            {/* <TouchableOpacity style={styles.buttonFacebook}>
                            <Text style={styles.txtFacebook}>Follow</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.buttonGoogle}
                            onPress={() => {
                                this.props.navigation.navigate('Chat_Screen', { data: this.props.navigation.state.params.thamso })
                            }}>
                            <Text style={styles.txtGoogle}>Message</Text></TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10
  },
  textlogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  textstatus: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 17,
    color: '#000',
  },
  container2: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 5,
    width: 350,
    height: 270,
    marginBottom: 10,
    //490
  },
  statuss: {
    width: 310,
    marginTop: 15,
    borderRadius: 5,
    height: 200,
  },
  images: {
    width: 310,
    borderRadius: 5,
    height: 200,
  },
});

