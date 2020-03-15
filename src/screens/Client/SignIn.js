import React,{useState} from 'react';
import {Text,View,StyleSheet,ImageBackground,TextInput,Image,KeyboardAvoidingView,Card,Dimensions,TouchableOpacity,Button,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../store/Client/actions/Client_SignIn_actions'
import { SignInUser } from '../../moduels/Client/Client_Moduel';

var validator = require("email-validator");
//Design :fit on more than mobile,missing font,Validation

const SignIn=({navigation})=>
{
  const disptach = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email_error,setemail_error]=useState('');
  const [password_error,setpassword_errorr]=useState('');

  const isLoading = useSelector((state) => {
        return state.SignInReducer.Sign_In
    })
    const token = useSelector((state) => {
        return state.SignInReducer.token
    })
  

 const  validationemail=()=>
  {
    if(email=="")
    {
      setemail_error("Please enter your Email ")
      
    }
      // else 
      // {
        // var validator = require("email-validator");
        // if(validator.validate(email))
        // {
        //   setemail_error("")
        // }
        else setemail_error("")
      //}  
  }
  const validationpassword=()=>
        { console.log(password)
          
          if(password=='')
          {
            setpassword_errorr(" Please enter your Password")
            
          }
          else setpassword_errorr("")
        }
          
    return(
        <View style={styles.background1}>
        <View style={styles.background2}>
        
        <TouchableOpacity 
       onPress={()=>{navigation.navigate('Home')}}
        style={styles.backbutton} >
          <Text>
          <Icon name="arrowleft" style={styles.iconstyle}/>
        </Text>
        </TouchableOpacity>
           
       <View style={styles.SignUp_SignUp}>
       
       <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
         <Text style={styles.SignIn}>SIGN IN</Text>
         </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
         <Text style={styles.SignUp}>SIGN UP</Text>
         </TouchableOpacity>   

       </View>
       
        <View style={styles.container}>
        
          <TextInput
            placeholder="Email"
            placeholderTextColor = '#B9B3BD'
            keyboardType={"email-address"}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={() => setEmail()}
            onBlur={()=>validationemail()}
          />
           {/* <Text style={styles.texterror}>{email_error}</Text> */}
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor = '#B9B3BD'
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
            value={password}
            onChangeText={() => setPassword()} 
            onBlur={(text)=>validationpassword(text)}
            />
           {/* <Text style={styles.texterror}>{password_error}</Text> */}
          
           </View>
           
          <TouchableOpacity 
                     onPress={() => {
                        disptach(signInAction(new SignInUser(email, password)))
                    }
                    } style={styles.Continuebutton}>
                        {
                    isLoading===true ? <ActivityIndicator /> : null
                }{
                token ? <Text >{token}</Text> : null
                }
         <Text style={styles.continue}>CONTINUE</Text>
         </TouchableOpacity>
         
          <TouchableOpacity style={styles.forgetPasswordButton}><Text style={styles.ForgetPassword}>FORGOT PASSWORD</Text></TouchableOpacity>   
          </View>
          </View>
        
        
    )
  

}
const styles=StyleSheet.create({
  background1:{
    backgroundColor:'#F1F0F2',
    flex:1
  },

  background2:{
    backgroundColor:'#7598BA',
    height:'33%',
    borderBottomLeftRadius:70
  },
  backbutton:{
    position:'absolute',
    marginTop:'15%',
    marginLeft:'10%'
  },
  iconstyle:{
     color:'#fff',
     fontSize:20
  },
  SignUp_SignUp:
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'23%',
    marginRight:'20%',
    marginLeft:'20%',
    marginBottom:'5%'
  },
  SignIn:
  {
  color:'white',
  fontSize:12,
  marginRight:'20%',
  fontFamily:'Montserrat_SemiBold'
  },
  SignUp:{
    color:'#C0CDDC',
    fontSize:12,
    fontFamily:'Montserrat_SemiBold'
  },
    container: {
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
        marginLeft: '10%',
        marginRight: '10%',
        borderBottomColor:'#DDDDDD',
        borderBottomWidth:1,
        marginBottom:'5%',
        marginTop:'2%',
        fontSize: 16,
        fontFamily:'Montserrat_Medium'
       
      },
      text:{
        color:'#DDDDDD',
        fontSize:12,
        position:'relative',
        alignItems:'center',
       
      },
      Continuebutton: {
        backgroundColor: '#132641',
        height: '30%',
        width:'87%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'7%',
        marginRight:'7%',
        marginTop:'2%',
        marginBottom:'5%'
      },
      forgetPasswordButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      ForgetPassword:{
        color:'#132641',
        fontSize:12,
        fontFamily:'Montserrat_SemiBold'
      },
      continue:{
        color:'#fff',
        fontSize:14,
        fontFamily:'Montserrat_SemiBold'
      },
      texterror:{
        color:'red',
        fontSize:14,
        position:'relative',
        alignItems:'center',
        marginLeft:30,
        marginRight:20,
        fontFamily:'Montserrat_Medium'
      },
});
export default SignIn;