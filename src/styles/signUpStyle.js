

import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

  ByClickingText:{
    color:'#767676',
    fontSize:14,
    marginBottom:'0%',
    marginTop:Dimensions.get('window').height>800?'10%':'5%',
    textAlign:'center',
    fontFamily:'Montserrat',
 
  },
  terms_conditionsbutton:{
    color:'#132641',
    textDecorationLine: 'underline',
    fontSize: 14,
    textAlign: 'center',
    fontFamily:'Montserrat',
    marginBottom:'0%', 
    marginBottom:'5%', 
  
  },
      //   input: {
      //     height: Dimensions.get('window').height>800?25:25,
      //     marginBottom: '0%',
      //     marginTop: '9%',
      // },
      // firstnameinput:{
      //     height: Dimensions.get('window').height>800?25:25,
      //     marginBottom: '0%',
      //     marginTop: Dimensions.get('window').height>800?'10%':'9%',
      // },
      // form :{
      //   height: '85%',
      //   //minHeight:Dimensions.get('window').height>850?'0%':'83%'
      // }
      input: {
        height: Dimensions.get('window').height>800?30:30,
        marginBottom: '1%',
        marginTop: Dimensions.get('window').height>850?'8%':'5%',
       
    },
    firstnameinput:{
      height: Dimensions.get('window').height>800?30:30,
      marginTop: Dimensions.get('window').height>850?'8%':'7%',
      marginBottom:'1%'
    },
    form: {
      height: '80%',
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
      height:'4%',
      fontFamily: 'Montserrat_Medium',
     
  },
  });
 
