import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  escrita: {
    height: 40,
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderColor: '#FF0000',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#FF0000',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export { styles };