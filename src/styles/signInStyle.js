import { StyleSheet,Dimensions } from 'react-native';


export default StyleSheet.create({
   ForgetPasswordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    left:'34%',
    right:'34%',
    top:Dimensions.get('window').height>850?'50%':'55%',
  },
   ForgetPasswordText: {
    color: '#132641',
    fontSize: 12,
    fontFamily:'Montserrat_SemiBold',
  },
  input: {
    marginLeft: '7%',
    marginRight: '7%',
    marginBottom: '0%',
    marginTop: '8%',
},
});