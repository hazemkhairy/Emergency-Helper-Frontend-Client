import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    //   Form: {
    //       borderWidth: 0,
    //       borderColor: '#d6d7da',
    //       backgroundColor: '#fff',
    //       height:'212%',
    //       width:'87%',
    //       marginLeft:'7%',
    //       marginRight:'7%', 
    //       marginBottom:'4%',
    //       borderRadius: 35,
    //       justifyContent:'center',
    //     },
    //     input: {
    //       height: '7%',
    //       backgroundColor: '#ffffff00',
    //       borderBottomColor:'#DDDDDD',
    //       borderBottomWidth:1,
    //       fontSize: 16,
    //       marginLeft: '7%',
    //       marginRight: '7%',
    //       marginBottom: '3%',
    //       marginTop:'3%' ,  
    //       fontFamily:'Montserrat_Medium'
    //     },
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
      },
  });
 
