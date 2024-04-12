import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './style';
const Imc = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    if (peso && altura) {
      const imc = peso / (altura * altura);

      if (imc < 18.5) {
        setResultado('Abaixo do peso');
      } else if (imc >= 18.5 && imc < 25) {
        setResultado('Peso normal');
      } else if (imc >= 25 && imc < 30) {
        setResultado('Sobrepeso');
      } else if (imc >= 30 && imc < 35) {
        setResultado('Obesidade grau 1');
      } else if (imc >= 35 && imc < 40) {
        setResultado('Obesidade grau 2');
      } else {
        setResultado('Obesidade grau 3');
      }
    } else {
      setResultado('Digite valores válidos.');
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>CALCULADORA DE IMC</Text>
      <TextInput
        style={styles.escrita}
        onChangeText={(text) => setPeso(text)}
        value={peso}
        placeholder="Digite o seu peso em kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.escrita}
        onChangeText={(text) => setAltura(text)}
        value={altura}
        placeholder="Digite a sua altura em metros"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={calcularResultado}
        style={styles.botao}
      />
      <Text style={styles.resultado}> {resultado}</Text>
    </View>
  );
};

export default Imc;
