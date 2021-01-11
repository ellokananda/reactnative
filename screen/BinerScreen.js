import React, {Component} from "react";
import {View, Picker} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class BinerScreen extends Component {
  constructor(){
    super();
    this.state = {
      option: "10",
      biner: "",
      result: ""
    }
  }
  //fungsi konversi biner ke desimal
  convertToDesimal = () => {
    let hasil = parseInt(this.state.biner,2).toString(10);
    this.setState({result: hasil});
  }
  //ke oktal
  convertToOctal = () => {
    let hasil = parseInt(this.state.biner,2).toString(8);
    this.setState({result: hasil});
  }
  //ke hexa
  convertToHexa = () => {
    let hasil = parseInt(this.state.biner,2).toString(16);
    this.setState({result: hasil});
  }

  convert = () => {
    if (this.state.option === "10") {
      this.convertToDesimal();
    }
    else if (this.state.option === "8") {
      this.convertToOctal();
    }
    else if (this.state.option === "16") {
      this.convertToHexa();
    }
  }

  render() {
    return(
      <View>
        <TopHeader
          navigation={this.props.navigation}
          title="Konversi Biner" />

        <View style={{padding:10}}>
          <Text h4>Konversi Bilangan Biner</Text>
          <Text h5>Opsi Bilangan</Text>
          <Picker
            selectedValue={this.state.option}
            style={{width:200, height:80}}
            onValueChange={(value) => this.setState({option: value})}>

            <Picker.Item label="Desimal" value="10" />
            <Picker.Item label="Octal" value="8" />
            <Picker.Item label="Hexadesimal" value="16" />
          </Picker>
          <Input label="Masukkan nilai Biner"
            value={this.state.biner}
            onChangeText={(value) => this.setState({biner: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
        </View>
      </View>
    )
  }
}
export default BinerScreen;
