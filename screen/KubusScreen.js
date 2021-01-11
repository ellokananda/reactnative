import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center"
  },
  input:{
    marginTop:20
  },
  labelInput:{
    color: "maroon"
  },
  result: {
    fontSize:25,
    fontWeight:"bold",
    marginTop:10,
    color: "maroon"
  }
});

class KubusScreen extends Component {
  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      s:0
    }
  }

  hitungLuas = () => {
    //ambil dan konversi nilai s ke bentuk numeric
    let s = Number(this.state.s);

    let l = 6 * (s * s);

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
  let s = Number(this.state.s);

    let v = s * s * s;

    //mengganti nilai state volume dengan hasil penghitungan
    this.setState({volume : v});
  }

  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Kubus" />
        <View style={styles.container}>
        <Text>Bangun Ruang Kubus</Text>

        <Input
        label="Nilai Sisi Kubus" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({s: value}) }
        value={this.state.s.toString()}/>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungLuas(); this.hitungVolume();}}/>

        <Text style={styles.result}>Luas Kubus = {this.state.luas}</Text>
        <Text style={styles.result}>Volume Kubus = {this.state.volume}</Text>
        </View>
      </View>

    )
  }
}
export default KubusScreen;
