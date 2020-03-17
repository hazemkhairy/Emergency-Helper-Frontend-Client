import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    SignInText:
    {
    color:'white',
    fontSize:12,
    marginRight:'20%',
    fontFamily:'Montserrat_SemiBold'
    },
    SignUpText:{
      color:'#C0CDDC',
      fontSize:12,
      fontFamily:'Montserrat_SemiBold'
    },
      Form: {
          borderWidth: 0,
          borderColor: '#d6d7da',
          backgroundColor: '#fff',
          height:'75%',
          width:'87%',
          marginLeft:'7%',
          marginRight:'7%', 
          marginBottom:'5%',
          borderRadius: 35,
          justifyContent:'center',
        },
        input: {
          height: '15%',
          backgroundColor: '#ffffff00',
          marginLeft: '7%',
          marginRight: '7%',
          borderBottomColor:'#DDDDDD',
          borderBottomWidth:1,
          marginBottom:'0%',
          marginTop:'5%',
          fontSize: 16,
          fontFamily:'Montserrat_Medium'
        },
        ForgetPasswordButton:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        ForgetPasswordText:{
          color:'#132641',
          fontSize:12,
          fontFamily:'Montserrat_SemiBold'
        },
       
  });