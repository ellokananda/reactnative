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

class BalokScreen extends Component {
  constructor(){
    super();
    this.state = {
      luas: 0,
      volume: 0,
      p:0,
      le:0,
      t:0
    }
  }

  hitungLuas = () => {

    let p = Number(this.state.p);
    let le = Number(this.state.le);
    let t = Number(this.state.t);

    let l = 2 * ((p * le) + (le * t) + (p * t));

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({luas : l});
  }

  hitungVolume = () => {
    let p = Number(this.state.p);
    let le = Number(this.state.le);
    let t = Number(this.state.t);
    let v = p * le * t;

    //mengganti nilai state volume dengan hasil penghitungan
    this.setState({volume : v});
  }

  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Balok" />
        <View style={styles.container}>
        <Text>Bangun Ruang Balok</Text>

        <Input
        label="Nilai Panjang Balok" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({p: value}) }
        value={this.state.p.toString()}/>

        <Input
        label="Nilai Lebar Balok" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({le: value}) }
        value={this.state.le.toString()}/>

        <Input
        label="Nilai Tinggi Balok" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({t: value}) }
        value={this.state.t.toString()}/>


        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungLuas(); this.hitungVolume();}}/>

        <Text style={styles.result}>Luas Balok = {this.state.luas}</Text>
        <Text style={styles.result}>Volume Balok = {this.state.volume}</Text>
        </View>
      </View>

    )
  }
}
export default BalokScreen;
