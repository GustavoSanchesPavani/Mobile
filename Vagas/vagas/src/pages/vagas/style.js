import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    marginTop: 80,
    alignItems:'center',
  },
  
text1: {
    alignSelf: 'center',
    fontFamily: 'Arial',
    fontWeight: 'Times',
    fontSize: 27, 
    color: '#FF6347',
},
text2:{
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 21, 
    color: 'blue', 
},
text3:{
    marginTop: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 19, 
    color: 'black', 
},
text4:{
    fontFamily: 'Roboto',
    fontSize: 19, 
    color: 'green', 
},

text5:{
    fontFamily: 'roboto',
    fontSize: 17, 
    color: 'black', 
},
  box1:{
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    height: 200,
    width: 360,
    alignItems: 'center',
  },
});

export default styles;