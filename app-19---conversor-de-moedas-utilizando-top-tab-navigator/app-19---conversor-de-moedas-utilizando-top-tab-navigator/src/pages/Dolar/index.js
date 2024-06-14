import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style'; // Importando os styles

const Dolar = () => {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  const converter = () => {
    const valorEmReal = parseFloat(valor);
    const valorEmDolar = valorEmReal / 5.16; 

    setResultado(valorEmDolar.toFixed(2)); 
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
      <Button title="Converter para USD" onPress={converter} />
      {resultado !== '' && <Text style={styles.textoResultado}>Resultado: {resultado}</Text>}
    </View>
  );
};

export default Dolar;
