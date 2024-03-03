import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {styles} from './style';

const Multiplicador = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const resultado = Number(valor1) * Number(valor2);
    setResultado(resultado.toString());
  };
  
  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
      <TextInput
        style={styles.escrita}
        onChangeText={text => setValor1(text)}
        value={valor1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.escrita}
        onChangeText={text => setValor2(text)}
        value={valor2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={calcular}
        style={styles.botao}
      />
      <Text style={styles.resultado}>Resultado : {resultado}</Text>
    </View>
  );
};

export default Multiplicador;