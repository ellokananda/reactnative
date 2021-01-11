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

class BolaScreen extends Component {
  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      r:0,
    }
  }

  hitungLuas = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    let l = 4 * 3.14 * r * r;

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    let v = 4/3 * 3.14 * r * r * r;

    //mengganti nilai state volume dengan hasil penghitungan
    this.setState({volume : v});
  }

  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Bola" />
        <View style={styles.container}>
        <Text>Bangun Ruang Bola</Text>

        <Input
        label="Nilai Jari-jari Bola" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({r: value}) }
        value={this.state.r.toString()}/>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungLuas(); this.hitungVolume();}}/>

        <Text style={styles.result}>Luas Bola = {this.state.luas}</Text>
        <Text style={styles.result}>Volume Bola = {this.state.volume}</Text>
        </View>
      </View>

    )
  }
}
export default BolaScreen;
