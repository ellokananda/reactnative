import React, {Component} from "react";
import {Header,Icon} from "react-native-elements";
//load element header dan icon dari library react-native-elements

class TopHeader extends Component {
  render(){
    return (
      <Header
      backgroundColor = "#f03e3e"
      leftComponent={
        <Icon name="menu" color="#fff" onPress={() => this.props.navigation.toggleDrawer()} />
      }
      centerComponent={
        {
          text: this.props.title,
          style: {color: "#fff", fontWeight:"bold"}
        }
      }
      statusBarProps={ {barStyle: "light-content"} }
      />
    );
  }
}
export default TopHeader;
