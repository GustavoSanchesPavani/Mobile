import { View, Text } from 'react-native';
import { styles } from './styles';

function Dados_Pessoais() {
  return (
    <View style = {[styles.area]}>
    <Text style={[styles.titulo]}>
    DADOS PESSOAIS
     </Text> 
     <Text style={[styles.ajustado]}>
    Gustavo Sanches Pavani {"\n"}
    Idade: 20
     </Text>
    </View>
  );
}

export default Dados_Pessoais;
