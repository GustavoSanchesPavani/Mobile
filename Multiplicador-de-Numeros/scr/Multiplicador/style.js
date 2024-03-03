import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#82E0AA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  escrita: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: 'red',
    marginTop: 10,
    width: '50%', 
    height: '50%', 
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {styles};