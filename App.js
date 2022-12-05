import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  var[C, setC] = useState('');
  var[F, setF] = useState('');

  function CalcularTemperatura(){
    F = (9 * parseFloat(C) + 160)/5;

    alert("Temperatura em Fahrenheit: " + F + " F°");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Temperatura</Text>

      <TextInput style={styles.campo}
      placeholder="Digite uma temperatura em Celsius" 
      keyboardType="numeric"
      onChangeText={ (C) => setC(C) }
      />

    <TouchableOpacity style={styles.botao} onPress={CalcularTemperatura}>
      <Text style={styles.textoBotao}>Calcular</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo:{
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15
  },

  botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 6
  },

  textoBotao:{
    fontSize: 25
  }
});
