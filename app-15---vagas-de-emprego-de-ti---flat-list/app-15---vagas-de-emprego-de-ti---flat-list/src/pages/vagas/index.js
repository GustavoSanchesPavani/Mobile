import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

function Vagas() {
  const navigation = useNavigation();

  const vagas = [
    'Desenvolvedor Web',
    'Analista de Dados',
    'Desenvolvedor de BackEnd',
    'Desenvolvedor Mobile',
    'Engenheiro de Software',
    'Arquiteto de Soluções',
    'Desenvolvedor FrontEnd',
    'Desenvolvedor FullStack',
    'Analista de Qualidade de Software',
    'Desenvolvedor de Jogos',
    'Analista de Sistemas',
    'Desenvolvedor de IA',
    'Designer UX/UI',
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.boxVaga}>
      <Text style={styles.textoTituloVaga}>{item}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: item })}>
        <Text style={styles.textoVerMais}>Ver mais...</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.viewPrincipal}>
      <Text style={styles.textoTitulo}>VAGAS ENCONTRADAS</Text>

      <FlatList
        data={vagas}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Vagas;
