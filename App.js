import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animacion1 from './components/Animacion1'

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.contenido}>
          <Animacion1/>
       </View> 
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#105C46',
    justifyContent: 'center'
  },
  contenido: {
    marginHorizontal: '2.5%'
  },
  texto: {
    textAlign: 'center',
    color: '#FFF',
  }
});
