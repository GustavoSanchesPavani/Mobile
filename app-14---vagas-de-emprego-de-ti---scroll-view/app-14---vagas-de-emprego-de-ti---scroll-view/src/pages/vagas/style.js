import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  textoTitulo: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  boxVaga: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoTituloVaga: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textoVerMais: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});

export default styles;

