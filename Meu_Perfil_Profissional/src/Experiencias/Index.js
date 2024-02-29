import { View, Text } from 'react-native'
import {styles} from './styles'


function Exp(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiencias</Text>
      <Text style={{textAlign:'center'}} >Sobrevive ao perigo </Text>
    </View>
  )
}


export default Exp;