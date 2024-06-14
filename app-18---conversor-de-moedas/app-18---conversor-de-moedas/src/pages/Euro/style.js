import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black', 
  },
  entrada: {
    width: '80%',
    height: 40,
    backgroundColor: '#212121', 
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    color: '#CCCCCC', 
  },
  textoResultado: {
    color: '#CCCCCC', 
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
