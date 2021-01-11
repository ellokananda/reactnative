import React, {Component} from "react";
import {View, StyleSheet} from "react-native";
// StyleSheet digunakan untuk menambahkan style pada element
import {Text, Input, Button} from "react-native-elements";
import TopHeader from "../component/TopHeader";
// load komponent TopHeader yang telah dibuat sebelumnya

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

class BMIScreen extends Component {
  constructor(){
    super();
    this.state = {
      tb: "",
      bb: "",
      hasil: "",
      keterangan: "",
      result: ""
    }
  }

  hitungBMI = () => {
    let tb = Number(this.state.tb)/100;
    let bb = Number(this.state.bb);

    let hasil = bb/( tb * tb );
    if (hasil < 18.5){
      this.setState({keterangan: "Kurus"});
    }else if ((hasil >= 18.5) && (hasil <=22.9)){
      this.setState({keterangan: "Ideal"});
    }else if ((hasil >= 23) && (hasil <=24.9)){
      this.setState({keterangan: "Overweigh"});
    }else if (hasil >= 25){
      this.setState({keterangan: "Obesitas"});
    }else{
      this.setState({keterangan: "Tidak Tahu"});

    }

  }


  render() {
    return(
      <View>
        <TopHeader navigation={this.props.navigation} title="BMI" />
        <View style={styles.container}>
        <Text h4>BMI</Text>

        <Input
        label="Nilai Tinggi Badan" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({tb: value}) }
        value={this.state.tb.toString()}/>

        <Input
        label="Nilai Berat Badan" labelStyle={styles.labelInput} keyboardType="numeric"
        containerStyle={styles.input}
        onChangeText={(value) => this.setState({bb: value}) }
        value={this.state.bb.toString()}/>

        <Button containerStyle={styles.input} title="Hitung"
          onPress={() => {this.hitungBMI();}}/>

        <Text style={styles.result}>Hasil = {this.state.keterangan}</Text>
        </View>
      </View>

    )
  }
}
export default BMIScreen;
