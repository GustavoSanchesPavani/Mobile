import { View, Text, Linking } from 'react-native';
import { styles } from './styles';

function Projetos() {
  return (
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projetos</Text>
      <Text style={{textAlign:'center'}}
        onPress={() =>
          Linking.openURL('https://github.com/GustavoSanchesPavani')
        }>
        GitHub
      </Text>
    </View>
  );
}

export default Projetos;
