import React, {Component} from "react";
import {View, Picker} from "react-native";
//stylesheet digunakan untuk menambkahkan style pada elemen
import {Text, Input, Button} from "react-native-elements"
//load komponen text,input dan button dari library react-native-element
import TopHeader from "../component/TopHeader";
//load element header dan icon dari library react-native-elements

class DesimalScreen extends Component {
  constructor(){
    super();
    this.state = {
      option: "2",
      desimal: "",
      result: ""
    }
  }
  //fungsi konversi desimal ke biner
  convertToBiner = () => {
    let hasil = parseInt(this.state.desimal,10).toString(2);
    this.setState({result: hasil});
  }
  //ke oktal
  convertToOctal = () => {
    let hasil = parseInt(this.state.desimal,10).toString(8);
    this.setState({result: hasil});
  }
  //ke hexa
  convertToHexa = () => {
    let hasil = parseInt(this.state.desimal,10).toString(16);
    this.setState({result: hasil});
  }

  convert = () => {
    if (this.state.option === "2") {
      this.convertToBiner();
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
          title="Konversi Desimal" />

        <View style={{padding:10}}>
          <Text h4>Konversi Bilangan Desimal</Text>
          <Text h5>Opsi Bilangan</Text>
          <Picker
            selectedValue={this.state.option}
            style={{width:200, height:80}}
            onValueChange={(value) => this.setState({option: value})}>

            <Picker.Item label="Binner" value="2" />
            <Picker.Item label="Octal" value="8" />
            <Picker.Item label="Hexadesimal" value="16" />
          </Picker>
          <Input label="Masukkan nilai desimal"
            value={this.state.desimal}
            onChangeText={(value) => this.setState({desimal: value})} />

          <Button title="Convert" onPress={this.convert} />
          <Text h5>Hasil: {this.state.result} </Text>
        </View>
      </View>
    )
  }
}
export default DesimalScreen;
