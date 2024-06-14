import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style'; 

const Bitcoin = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const valorEmReal = parseFloat(valor);
    const valorEmBitcoin = valorEmReal / 312.252; 

    setResultado(valorEmBitcoin.toFixed(8)); 
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
