import React, { Component } from 'react';
import {View,} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Hotel from './Screen/Hotel';
import Room from './Screen/Room';
import Detail from './Screen/Detail';


 class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          
      </View>
    );
  }
}
const AppNavigator = createStackNavigator({
  Hotel: {
    screen: Hotel
  },

  Room: {
    screen: Room
  },

  Detail: {
    screen: Detail
  },

});

export default createAppContainer(AppNavigator);
