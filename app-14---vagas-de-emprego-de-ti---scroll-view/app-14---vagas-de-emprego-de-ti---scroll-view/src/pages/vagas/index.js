import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; 
import { useNavigation } from '@react-navigation/native';

function Vagas() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewPrincipal}> 
      <Text style={styles.textoTitulo}>VAGAS ENCONTRADAS</Text> 

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor Web</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor Web' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Analista de Dados</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Analista de Dados' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor de BackEnd</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor de BackEnd' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor Mobile</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor Mobile' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Engenheiro de Software</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Engenheiro de Software' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Arquiteto de Soluções</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Arquiteto de Soluções' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor FrontEnd</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor FrontEnd' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor FullStack</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor FullStack' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Analista de Qualidade de Software</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Analista de Qualidade de Software' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor de Jogos</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor de Jogos' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Analista de Sistemas</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Analista de Sistemas' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Desenvolvedor de IA</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Desenvolvedor de IA' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxVaga}> 
          <Text style={styles.textoTituloVaga}>Designer UX/UI</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Informacoes', { title: 'Designer UX/UI' })}>
            <Text style={styles.textoVerMais}>Ver mais...</Text> 
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
}

export default Vagas;
