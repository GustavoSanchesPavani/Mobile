import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';
import api from '../service/index';

export default function Consulta() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [pesquisou, setPesquisou] = useState(false);

  const consultaCep = async (cep) => {
    try {
      const response = await api.get('/' + cep + '/json/');
      setEndereco(response.data);
      setPesquisou(true);
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
      />
      <Button title="Consultar CEP" onPress={() => consultaCep(cep)} />
      {pesquisou && (
        <>
          <Text style={styles.endereco}>CEP: {endereco.cep}</Text>
          <Text style={styles.endereco}>Logradouro: {endereco.logradouro}</Text>
          <Text style={styles.endereco}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.endereco}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.endereco}>Estado: {endereco.uf}</Text>
        </>
      )}
    </View>
  );
}
