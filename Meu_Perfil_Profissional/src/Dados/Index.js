import { View, Text } from 'react-native'
import {styles} from './styles'


function Dados_Pessoais(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados Pessoais</Text>
      <Text style={{textAlign:'center'}}>Gustavo Sanches Pavani</Text>
    </View>
  )
}


export default Dados_Pessoais;