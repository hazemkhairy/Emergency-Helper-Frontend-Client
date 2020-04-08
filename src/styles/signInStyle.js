import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
  ForgetPasswordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    width:'100%',
    top:Dimensions.get('window').height>850?'51%':'55%',
  },
   ForgetPasswordText: {
    color: '#132641',
    fontSize: 12,
    fontFamily:'Montserrat_SemiBold',
  },
  input: {
    height: Dimensions.get('window').height>800?30:30,
    marginBottom: '2%',
    marginTop: Dimensions.get('window').height>850?'8%':'5%',
    
},
  emailinput:{
    marginTop: Dimensions.get('window').height>850?'12%':'8%',
   height: Dimensions.get('window').height>800?30:30,
  marginBottom:'2%'
},
form: {
  height: '30%',
},
textError: {
  color: '#b30000',
  fontSize: 14,
  position: 'relative',
  alignItems: 'center',
  marginRight:'9%',
  marginLeft: '9%',
  marginTop: '0%',
  marginBottom:'0%',
  height:'40%',
  fontFamily: 'Montserrat_Medium',
 
},
});