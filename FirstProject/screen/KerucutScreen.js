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

class KerucutScreen extends Component {
  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      r:0,
      t:0,
      s:0
    }
  }

  hitungLuas = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    //ambil dan konversi nilai s ke bentuk numeric
    let s = Number(this.state.s);

    let l = (3.14 * r * r) + (3.14 * r * s);

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    //ambil dan konversi nilai t ke bentuk numeric
    let t = Number(this.state.t);
    let v = 1/3 * 3.14 * r * r * t;

    //mengganti nilai state volume dengan hasil penghitungan
    this.setState({volume : v});
  }

  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Kerucut" />
        <View style={styles.container}>
        <Text>Bangun Ruang Kerucut</Text>

        <Input
        label="Nilai Jari-jari Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({r: value}) }
        value={this.state.r.toString()}/>

        <Input
        label="Nilai Tinggi Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({t: value}) }
        value={this.state.t.toString()}/>

        <Input
        label="Nilai Selimut Kerucut" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({s: value}) }
        value={this.state.s.toString()}/>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungLuas(); this.hitungVolume();}}/>

        <Text style={styles.result}>Luas Kerucut = {this.state.luas}</Text>
        <Text style={styles.result}>Volume Kerucut = {this.state.volume}</Text>
        </View>
      </View>

    )
  }
}
export default KerucutScreen;
