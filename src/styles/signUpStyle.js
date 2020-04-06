import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
        ByClickingText:{
          color:'#767676',
          fontSize:14,
          marginBottom:'0%',
          textAlign:'center',
         fontFamily:'Montserrat',
         marginTop:'5%'
        },
        terms_conditionsbutton:{
          color:'#132641',
          textDecorationLine: 'underline',
          fontSize: 14,
          textAlign: 'center',
          fontFamily:'Montserrat',
          marginBottom:'5%', 
        },
        input: {
          marginLeft: '7%',
          marginRight: '7%',
          marginBottom: '0%',
          marginTop: Dimensions.get('window').height>850?'8%':'5%'
      }
  });
 
