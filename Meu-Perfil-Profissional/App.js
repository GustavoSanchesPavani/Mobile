import React from 'react';
import { View, Image } from 'react-native';
import Dados_Pessoais from './src/Dados/Index.js';
import Formacao from './src/Formacao/Index.js';
import Exp from './src/Experiencias/Index.js';
import Projetos from './src/projetos/Index.js';
import img from './img/photo.png';

function App() {
  return (
    <View>
      <Image
        source={img}
        style={{
          borderWidth: 3,
          borderRadius: 100,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 100,
        }}
      />
      <Dados_Pessoais />
      <Formacao />
      <Exp />
      <Projetos />
    </View>
  );
}

export default App;
