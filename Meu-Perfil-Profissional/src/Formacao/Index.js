import { View, Text } from 'react-native'
import {styles} from './styles'


function Formacao(){
  return(
    <View style={styles.area}>
      <Text style={[styles.titulo]}>
      FORMAÇÃO</Text>
      <Text style={[styles.ajustado]}>
      ETEC Jogos Digitais
      {"\n"}
      ETEC Analise e Desenvolvimento de Sistemas
      {"\n"}
      Analise e Desenvolvimento de Sistemas</Text>
    </View>
  )
}


export default Formacao;