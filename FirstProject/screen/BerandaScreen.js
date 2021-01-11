import React, {Component} from "react";
import {View, Text} from "react-native";
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class BerandaScreen extends Component {
  render() {
    return (
      <View>
        <TopHeader navigation={this.props.navigation} title="Beranda" />
        <Text>Halo ini Ellok</Text>
      </View>
    )
  }
}
export default BerandaScreen;
