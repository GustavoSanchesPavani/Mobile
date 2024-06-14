import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';
import { getExchangeRate } from '../Service/index'; 

const Bitcoin = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = async () => {
    const valorEmReal = parseFloat(valor);
    try {
      const exchangeRate = await getExchangeRate('BTC');
      const valorEmBitcoin = valorEmReal / exchangeRate;
      setResultado(valorEmBitcoin.toFixed(8));
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
      <Button title="Converter para BTC" onPress={converter} />
      {resultado !== '' && <Text style={styles.textoResultado}>Resultado: {resultado}</Text>}
    </View>
  );
};

export default Bitcoin;
