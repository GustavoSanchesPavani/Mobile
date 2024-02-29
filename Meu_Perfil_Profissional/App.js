import { View, Text, Image } from 'react-native';
import Dados_Pessoais from './src/Dados/Index.js';
import Formacao from './src/Formacao/Index.js';
import Exp from './src/Experiencias/Index.js';
import Projetos from './src/projetos/Index.js';

function App() {
  return (
    <View style={{ backgroundColor: 'Green' }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Image
          source={require('./img/photo.png')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
          }}
        />
      </View>
      <View style={{ backgroundColor: 'lightgray', marginTop: 25 }}>
        <View
          style={{
            backgroundColor: 'lightgray',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Dados_Pessoais />
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Formacao />
        </View>

        <View
          style={{
            backgroundColor: 'lightgray',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Exp />
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Projetos />
        </View>
      </View>
    </View>
  );
}

export default App;
