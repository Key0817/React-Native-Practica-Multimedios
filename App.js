import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtBienve}>Bienvenidos!</Text>
      <Text style={styles.titleAcc}>Ingresar con tu cuenta</Text>

      <TextInput style={styles.txtInput} placeholder='multimedios@gmail.com'></TextInput>
      <TextInput style={styles.txtInput} placeholder='...125s'></TextInput>
      <Text>Ingresar con tu cuenta?</Text>

      <Button title='Iniciar Sesión'/>
      <Text>Ya tienes cuenta? Registrarse</Text>

      <StatusBar style="auto" />
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
});
