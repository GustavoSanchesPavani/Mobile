import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Multiplicador = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const resultado = Number(valor1) * Number(valor2);
    setResultado(resultado.toString());
  };

  const estilo = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    escrita: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    botao: {
      marginTop: 10,
    },
    resultado: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Multiplicador de Números</Text>
      <TextInput
        style={estilo.escrita}
        onChangeText={text => setValor1(text)}
        value={valor1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <TextInput
        style={estilo.escrita}
        onChangeText={text => setValor2(text)}
        value={valor2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={calcular}
        style={estilo.botao}
      />
      <Text style={estilo.resultado}>Resultado : {resultado}</Text>
    </View>
  );
};

export default Multiplicador;