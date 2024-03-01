import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.texto}>NUMERO DE PESSOAS</Text>
      <Text style={styles.numero}>{contador}</Text>
      <Button title="Incrementar" onPress={incrementar} color="green" />
      <Button title="Decrementar" onPress={decrementar} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  numero: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  texto: {
    fontFamily: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: 'red',
  },
});

export default Contador;
