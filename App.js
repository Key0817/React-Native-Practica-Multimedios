import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/headerLogo.png")}/>

      <Text style={styles.txtBienve}>Bienvenidos!</Text>
      <Text style={styles.titleAcc}>Ingresar con tu cuenta</Text>

      <TextInput style={styles.txtInput} placeholder='multimedios@gmail.com'></TextInput>
      <TextInput style={styles.txtInput} placeholder='Contraseña'></TextInput>

      <TouchableOpacity >   
      <Text style={styles.txtPass}>¿Has olvidado su contraseña?</Text>
      </TouchableOpacity>   

      <TouchableOpacity >
      <LinearGradient
        colors={['#00C1BB', '#005B58']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.btnLogin}
        >
        <Text style={styles.txtLogin} >Iniciar Sesion</Text>
      </LinearGradient>     
      </TouchableOpacity>

      <Text style={styles.txtCuenta}>No tiene cuenta?</Text>
      <TouchableOpacity >
      <Text style={styles.txtRegistrarse}>Registrarse</Text>
      </TouchableOpacity>  

      <StatusBar style="auto" />
{/* 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      
      </NavigationContainer> */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  txtBienve: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#34434D',
    textAlign: 'left',
    paddingLeft: 30,
  },

  titleAcc: {
    fontSize: 20,
    fontWeight: 'light',
    color: 'gray',
    textAlign: 'left',
    paddingLeft: 30,
  },

  txtInput: {
    width: '80%',
    height: 50,
    borderRadius: 30, 
    paddingLeft: 30,
    marginTop: 20,
    marginLeft: 20,
    borderColor: 'gray',
    color: 'gray',
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    textShadowOffset: {width:0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },

  txtPass: {
    textAlign: 'right',
    paddingTop: 10,
    marginRight: 50,
    color: '#00C1BB',
    fontSize: 15,
  },

  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop:35,
    marginLeft: 80,
    paddingTop:10,
  },

  txtLogin:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
   
  },

  txtCuenta: {
    textAlign: 'center',
    paddingTop: 10,
    color: '#00C1BB',
    fontSize: 15,
    alignItems:'center',
  },

  txtRegistrarse: {
    textAlign: 'center',
    color: '#00C1BB',
    fontSize: 15,
    alignItems:'center',
    fontWeight: 'bold',
  },



});
