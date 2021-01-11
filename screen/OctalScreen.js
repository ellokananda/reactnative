import React, {Component} from "react";
import {View, Picker} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class OctalScreen extends Component {
  constructor(){
    super();
    this.state = {
      option: "10",
      octal: "",
      result: ""
    }
  }
  //fungsi konversi oktal ke desimal
  convertToDesimal = () => {
    let hasil = parseInt(this.state.octal,8).toString(10);
    this.setState({result: hasil});
  }
  //ke biner
  convertToBiner = () => {
    let hasil = parseInt(this.state.octal,8).toString(2);
    this.setState({result: hasil});
  }
  //ke hexa
  convertToHexa = () => {
    let hasil = parseInt(this.state.octal,8).toString(16);
    this.setState({result: hasil});
  }

  convert = () => {
    if (this.state.option === "10") {
      this.convertToDesimal();
    }
    else if (this.state.option === "2") {
      this.convertToBiner();
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
          title="Konversi Octal" />

        <View style={{padding:10}}>
          <Text h4>Konversi Bilangan Octal</Text>
          <Text h5>Opsi Bilangan</Text>
          <Picker
            selectedValue={this.state.option}
            style={{width:200, height:80}}
            onValueChange={(value) => this.setState({option: value})}>

            <Picker.Item label="Desimal" value="10" />
            <Picker.Item label="Biner" value="2" />
            <Picker.Item label="Hexadesimal" value="16" />
          </Picker>
          <Input label="Masukkan nilai Octal"
            value={this.state.octal}
            onChangeText={(value) => this.setState({octal: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
        </View>
      </View>
    )
  }
}
export default OctalScreen;
