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

class TabungScreen extends Component {
  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      r:0,
      t:0
    }
  }

  hitungLuas = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    //ambil dan konversi nilai s ke bentuk numeric
    let t = Number(this.state.t);

    let l = (2 * 3.14 * r * r) + (2 * 3.14 * r * t);

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    //ambil dan konversi nilai r ke bentuk numeric
    let r = Number(this.state.r);

    //ambil dan konversi nilai t ke bentuk numeric
    let t = Number(this.state.t);
    let v = 3.14 * r * r * t;

    //mengganti nilai state volume dengan hasil penghitungan
    this.setState({volume : v});
  }

  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Tabung" />
        <View style={styles.container}>
        <Text>Bangun Ruang Tabung</Text>

        <Input
        label="Nilai Jari-jari Tabung" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({r: value}) }
        value={this.state.r.toString()}/>

        <Input
        label="Nilai Tinggi Tabung" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({t: value}) }
        value={this.state.t.toString()}/>


        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungLuas(); this.hitungVolume();}}/>

        <Text style={styles.result}>Luas Tabung = {this.state.luas}</Text>
        <Text style={styles.result}>Volume Tabung = {this.state.volume}</Text>
        </View>
      </View>

    )
  }
}
export default TabungScreen;
