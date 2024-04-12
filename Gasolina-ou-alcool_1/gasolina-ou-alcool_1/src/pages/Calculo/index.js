import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './style';


const Calc = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    if (gasolina && alcool) {
      if (parseFloat(gasolina) > parseFloat(alcool)) {
        setResultado('A gasolina é mais cara.');
      } else if (parseFloat(alcool) > parseFloat(gasolina)) {
        setResultado('O álcool é mais caro.');
      } else {
        setResultado('Os preços são iguais.');
      }
    } else {
      setResultado('Digite valores válidos.');
    }
  };

  return (
    <View style={styles.view}>
 
      <Text style={styles.titulo}>GASOLINA OU ALCOOL </Text>
      <TextInput
        style={styles.escrita}
        onChangeText={(text) => setGasolina(text)}
        value={gasolina}
        placeholder="Digite o valor gasolina"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.escrita}
        onChangeText={(text) => setAlcool(text)}
        value={alcool}
        placeholder="Digite o preço do álcool"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={calcularResultado}
        style={styles.botao}
      />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

export default Calc;
