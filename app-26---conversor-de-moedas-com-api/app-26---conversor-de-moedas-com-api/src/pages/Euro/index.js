import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';
import { getExchangeRate } from '../Service/index';

const Euro = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = async () => {
    const valorEmReal = parseFloat(valor);
    try {
      const exchangeRate = await getExchangeRate('EUR');
      const valorEmEuro = valorEmReal / exchangeRate;
      setResultado(valorEmEuro.toFixed(2));
    } catch (error) {
      console.error("Error converting currency", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor em BRL"
        keyboardType="numeric"
        style={styles.entrada}
        placeholderTextColor="#CCCCCC"
      />
      <Button title="Converter para EUR" onPress={converter} />
      {resultado !== '' && <Text style={styles.textoResultado}>Resultado: {resultado}</Text>}
    </View>
  );
};

export default Euro;
