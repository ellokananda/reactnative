import React, {Component} from "react";
import {View, Picker} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class SuhuScreen extends Component {
  constructor(){
    super();
    this.state = {
      option: "f",
      c: "",
      result: ""
    }
  }
  //fungsi konversi ke fahrenheit
  convertToFahrenheit = () => {
    let c = Number(this.state.c);
    let hasil = ( 9/5 * c ) + 32;
    this.setState({result: hasil});
  }
  //reamur
  convertToReamur = () => {
    let c = Number(this.state.c);
    let hasil = ( 4/5 * c );
    this.setState({result: hasil});
  }
  //kelvin
  convertToKelvin = () => {
    let c = Number(this.state.c);
    let hasil = c + 273;
    this.setState({result: hasil});
  }

  convert = () => {
    if (this.state.option === "f") {
      this.convertToFahrenheit();
    }
    else if (this.state.option === "r") {
      this.convertToReamur();
    }
    else if (this.state.option === "k") {
      this.convertToKelvin();
    }
  }

  render() {
    return(
      <View>
        <TopHeader
          navigation={this.props.navigation}
          title="Konversi Suhu" />

        <View style={{padding:10}}>
          <Text h4>Konversi Suhu</Text>
          <Text h5>Opsi Suhu</Text>
          <Picker
            selectedValue={this.state.option}
            style={{width:200, height:80}}
            onValueChange={(value) => this.setState({option: value})}>

            <Picker.Item label="Fahrenheit" value="f" />
            <Picker.Item label="Reamur" value="r" />
            <Picker.Item label="Kelvin" value="k" />
          </Picker>
          <Input label="Masukkan suhu celcius"
            value={this.state.c}
            onChangeText={(value) => this.setState({c: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
        </View>
      </View>
    )
  }
}
export default SuhuScreen;
