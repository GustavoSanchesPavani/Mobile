import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './style';

function Vagas() {
  return (
    <View style={styles.view}>
      <Text style={styles.text1}> VAGAS ENCONTRADAS </Text>

      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.box1}>
        
        <Text style={styles.text2}> DESENVOLVEDOR WEB</Text>
         <Text style={styles.text3}> Salario: <Text style={styles.text4}>R$ 150.000</Text></Text>
         <Text style={styles.text3}> Descrição: <Text style= {styles.text5}> Necessario ter conhecimento em HTML5, CSS, PHP e JAVASCRIPT </Text></Text>
         <Text style={styles.text3}> Contato: <Text style={styles.text3}>4002-8922</Text></Text>
        </View>

        <View style={styles.box1}>
        
        <Text style={styles.text2}> ANALISTA DE DADOS</Text>
         <Text style={styles.text3}> Salario: <Text style={styles.text4}>R$ 150.000</Text></Text>
         <Text style={styles.text3}> Descrição: <Text style= {styles.text5}> Front-end é a interface do usuário em um aplicativo web. </Text></Text>
         <Text style={styles.text3}> Contato: <Text style={styles.text3}>4002-8922</Text></Text>
        </View>

        <View style={styles.box1}>
        
        <Text style={styles.text2}> Desenvolvedor de BackAnd</Text>
         <Text style={styles.text3}> Salario: <Text style={styles.text4}>R$ 150.000</Text></Text>
         <Text style={styles.text3}> Descrição: <Text style= {styles.text5}> Front-end é a interface do usuário em um aplicativo web. </Text></Text>
         <Text style={styles.text3}> Contato: <Text style={styles.text3}>4002-8922</Text></Text>
        </View>
        <View style={styles.box1}>
        
        <Text style={styles.text2}> Desenvolvedor de BackAnd</Text>
         <Text style={styles.text3}> Salario: <Text style={styles.text4}>R$ 150.000</Text></Text>
         <Text style={styles.text3}> Descrição: <Text style= {styles.text5}> Front-end é a interface do usuário em um aplicativo web. </Text></Text>
         <Text style={styles.text3}> Contato: <Text style={styles.text3}>4002-8922</Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Vagas;