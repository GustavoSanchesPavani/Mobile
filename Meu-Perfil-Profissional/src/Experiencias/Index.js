import { View, Text } from 'react-native';
import { styles } from './styles';

function Exp() {
  return (
    <View style={styles.area}>
      <Text style={[styles.titulo]}>EXPERIENCIAS</Text>
      <Text style={[styles.ajustado]}>
        Desenvolver Softwares
        {'\n'}
        Front End
        {'\n'}
        Back End
        {'\n'}
        Conhecimento em diversas linguagens
      </Text>
    </View>
  );
}

export default Exp;
