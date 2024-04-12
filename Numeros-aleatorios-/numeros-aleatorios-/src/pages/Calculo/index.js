import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './style';

const Random = () => {
  const [random, setRandom] = useState('');

  const randomizar = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setRandom(numeroAleatorio.toString());
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>GERADOR DE NÚMEROS ALEATÓRIOS</Text>
      <Button
        title="Gerar Número Aleatório"
        onPress={randomizar}
        style={styles.botao}
      />
      <Text style={styles.resultado}>Número Aleatório: {random}</Text>
    </View>
  );
};

export default Random;