import { View, Text } from 'react-native'
import {styles} from './styles'


function Formacao(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formaçao</Text>
      <Text style={{textAlign:'center'}}>Analise e Desenvolvimento de Sistemas</Text>
    </View>
  )
}


export default Formacao;