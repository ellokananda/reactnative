import React, {Component} from "react";
import {View, Picker} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class UangScreen extends Component {
  constructor(){
    super();
    this.state = {
      r: 0,
      result: ""
    }
  }

  convertToDollar = () => {
    let r = Number(this.state.r);
    let d = r * 0.000073 ;

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({dollar : d});
  }

  convertToYen = () => {
    let r = Number(this.state.r);
    let y = r * 0.0080 ;

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({yen : y});
  }

  convertToEuro = () => {
    let r = Number(this.state.r);
    let e = r * 0.000067 ;

    //mengganti nilai state luas dengan hasil penghitungan
    this.setState({euro : e});
  }


  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="Uang" />
        <View style={styles.container}>
        <Text>Konversi Mata Uang</Text>
        <Input
        label="Nilai Rupiah" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({r: value}) }
        value={this.state.r.toString()}/>

        <Button containerStyle={styles.input} title="Hasil"
          onPress={() => {this.convertToDollar();}}/>
        <Text style={styles.result}>USD = {this.state.dollar}</Text>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.convertToYen();}}/>
        <Text style={styles.result}>YEN = {this.state.yen}</Text>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.convertToEuro();}}/>
        <Text style={styles.result}>EURO = {this.state.euro}</Text>
        </View>
      </View>
    )
  }
}
export default UangScreen;
