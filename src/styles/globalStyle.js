import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  // SignIN_SignUp:
  // {
  //   display:'flex',
  //   flexDirection:'row',
  //   justifyContent:'center',
  //   marginTop:'23%',
  //   marginRight:'20%',
  //   marginLeft:'20%',
  //   marginBottom:'5%'
  // },
  //   white_background:{
  //       backgroundColor:'#F1F0F2',
  //       height:'100%',
  //       width:'100%',
  //       flex:1
  //     },
    
  //     blue_background:{
       
  //       backgroundColor:'#7598BA',
  //       height:'33%',
  //       borderBottomLeftRadius:70
  //     },
  //     backbutton:{
  //       position:'absolute',
  //       marginTop:'15%',
  //       marginLeft:'10%'
  //     },
  //     backIcon:{
  //        color:'#fff',
  //        fontSize:20
  //     },
  //     Continuebutton: {
  //       backgroundColor: '#132641',
  //       height:Dimensions.get('window').height>800?'20%':'25%',
  //       width:'85%',
  //       borderRadius: 35,
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       marginLeft:'8%',
  //       marginRight:'8%',
  //     },
  //     continueText:{
  //       color:'#fff',
  //       fontSize:14,
  //       fontFamily:'Montserrat_SemiBold',
  //     },

      //start from here
      texterror: {
        color: '#b30000',
        fontSize: 14,
        position: 'relative',
        alignItems: 'center',
        marginLeft: '7%',
        fontFamily: 'Montserrat_Medium',
        marginTop:'2%'
      },
      error: {
        borderBottomColor: '#b30000',
        borderBottomWidth: 1
      },
      input: {
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: '5%',
      },

      white_Background: {
        backgroundColor: '#F1F0F2',
        height: '100%',
         width: '100%'
    },
    blue_Background: {
        backgroundColor: '#7598BA',
        height: '33%',
        borderBottomLeftRadius: 70
    },
    container: {
        position: 'absolute',
        marginTop: '10%',
        width: '100%',
        height: '100%'
    },
    backButton: {
        marginLeft: '7%',
        width: 25
    },
    backIcon: {
        color: '#fff',
        fontSize: 20
    },
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        alignSelf: 'center'
        
    },
    activeText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    inActiveText: {
        color: '#C0CDDC',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    form: {
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        width: '87%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '5%',
        marginTop: '5%',
        paddingTop: '10%',
        borderRadius: 35,
        justifyContent: 'center',
        minHeight: '25%',
        alignContent: 'center',
        
    },
    continueButton: {
        backgroundColor: '#132641',
        height: '25%',
        width: '87%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '7%',
        marginRight: '7%',
    },
    continueText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat_SemiBold'
    },
    
});