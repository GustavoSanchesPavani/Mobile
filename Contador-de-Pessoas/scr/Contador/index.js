import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import  {styles}  from './style'; 

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


export default Contador;