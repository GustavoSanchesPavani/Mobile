import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vagas from './src/pages/vagas/index';
import Informacoes from './src/pages/informacoes/index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vagas"
          component={Vagas}
          options={{
            title: 'Vagas',
            headerTitleAlign: 'center', 
          }}
        />
        <Stack.Screen
          name="Informacoes"
          component={Informacoes}
          options={{
            headerTitleAlign: 'center', 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
