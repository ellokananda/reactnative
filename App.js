import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import BerandaScreen from "./screen/BerandaScreen";
//load file BerandaScreen
import TabungScreen from "./screen/TabungScreen";
import KerucutScreen from "./screen/KerucutScreen";
import BolaScreen from "./screen/BolaScreen";
import KubusScreen from "./screen/KubusScreen";
import BalokScreen from "./screen/BalokScreen";
import DesimalScreen from "./screen/DesimalScreen";
import BinerScreen from "./screen/BinerScreen";
import OctalScreen from "./screen/OctalScreen";
import HexadesimalScreen from "./screen/HexadesimalScreen";
import SuhuScreen from "./screen/SuhuScreen";
import BMIScreen from "./screen/BMIScreen";
import UangScreen from "./screen/UangScreen";

//konfigurasi navigasi yang akan dibuat dan load tampilan pada setiap navigasianya
const AppNavigator = createDrawerNavigator({
  Beranda : {
    screen: BerandaScreen
  },
  Tabung : {
    screen: TabungScreen
  },
  Kerucut : {
    screen: KerucutScreen
  },
  Bola : {
    screen: BolaScreen
  },
  Kubus : {
    screen: KubusScreen
  },
  Balok : {
    screen: BalokScreen
  },
  Desimal : {
    screen: DesimalScreen
  },
  Biner : {
    screen: BinerScreen
  },
  Octal : {
    screen: OctalScreen
  },
  Hexadesimal : {
    screen: HexadesimalScreen
  },
  Suhu : {
    screen: SuhuScreen
  },
  BMIScreen : {
    screen: BMIScreen
  },
  UangScreen : {
    screen: UangScreen
  },
});
export default createAppContainer(AppNavigator);
