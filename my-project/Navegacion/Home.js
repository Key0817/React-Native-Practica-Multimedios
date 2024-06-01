import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import HomeBtn from "./HomeBtn";

const Home = () =>{

    const navigation = useNavigation();

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hola Mundo</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Perfil")} >
      <LinearGradient
        colors={['#00C1BB', '#005B58']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.btnNext}
        >
        <Text style={styles.txtNext} >Home Btn</Text>
      </LinearGradient>     
      </TouchableOpacity>

    </View>
  );
}

export default Home;


const styles = StyleSheet.create({
  txtNext:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  btnNext: {
    borderRadius: 30,
    width: 219,
    height: 53,
    textAlign: 'center',
    padding:10,
    
    
  },
      
  });