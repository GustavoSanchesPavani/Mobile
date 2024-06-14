import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  titulo: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  tituloVaga: {
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cartaoVaga: {
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
  salario: {
    fontFamily: 'Roboto',
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  contato: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#777',
  },
});

export default styles;
