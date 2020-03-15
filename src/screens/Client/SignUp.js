import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,Dimensions,TouchableOpacity,Button,ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import {signUpAction} from '../../store/Client/actions/Client_SignUp_actions'
import {SignUpUser} from '../../moduels/Client/Client_Moduel'
const {width,height}=Dimensions.get('window');

//Design :fit on more than mobile,missing font,Validation missing design 

const SignUp=({navigation})=>
{
  const disptach = useDispatch();
  
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [phonenumber,setPhonenumber]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  
  const isLoading = useSelector((state) => {
    return state.SignUpReducer.loginStarted
})


  //  validationemail=()=>
  // {
    
  //   if(email=='')
  //   {
  //     this.setState({email_error:"Please enter your Email "})
      
  //   }
  //   else this.setemail_error("")
  
  // }
  // validationpassword=()=>
  //       {
          
  //         if(password=='')
  //         {
  //           this.setpassword_errorr(" Please enter your Password")
            
  //         }
  //         else this.setpassword_errorr("")
  //       }


  
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
       
       <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
         <Text style={styles.SignIn}>SIGN IN</Text>
         </TouchableOpacity> 
       <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
         <Text style={styles.SignUp}>SIGN UP</Text>
         </TouchableOpacity>   

       </View>
       
        <View style={styles.container}>

        <TextInput
              placeholder="First Name"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              value={firstname}
              onChangeText={(text) => setFirstname(text)} 
              //onBlur={()=>this.validatefirstname() } 
                     
            />
            {/* <Text style={styles.texterror}>{this.state.firstname_error}</Text> */}
            <TextInput
              placeholder="Last Name"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              value={lastname}
              onChangeText={(text) => setLastname(text)} 
            //  onBlur={()=>this.validationlastname()}
             
            />
            
            {/* <Text style={styles.texterror}>{lastname_error}</Text> */}
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              keyboardType={"numeric"}
              value={phonenumber}
              onChangeText={(text) => setPhonenumber(text)} 
              //onBlur={()=>this.validationphonenumber()}
            />
            {/* <Text style={styles.texterror}>{phonenumber_error}</Text> */}
            <TextInput
              placeholder="E-mail"
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              keyboardType={"email-address"}
              value={email}
              onChangeText={(text) => setEmail(text)} 
              //onBlur={()=>this.validationemail()}
             
            />
            {/* <Text style={styles.texterror}>{email_error}</Text> */}
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)} 
              //onBlur={()=>this.validationpassword()}
            />
            {/* <Text style={styles.texterror}>{password_error}</Text> */}
            <TextInput 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.input}
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)} 
             // onBlur={()=>this.validationconfirmpassword()}
             
            />
           {/* <Text style={styles.texterror}>{confirmpassword_error}</Text> */}

           <Text style={styles.text}>By clicking continue you are agreeing to our </Text>
           
           <TouchableOpacity>
             <Text style={styles.terms_conditions}>terms and conditions.</Text>
             </TouchableOpacity>   
          </View>
          <TouchableOpacity 
           onPress={() => {
            disptach(signUpAction(new SignUpUser(firstname, lastname,phonenumber,email,password,confirmpassword)))
        }
        } style={styles.Continuebutton}>
          <Text style={styles.continue}>CONTINUE</Text></TouchableOpacity>  
        
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
    color:'#C0CDDC',
    fontSize:12,
    marginRight:'20%',
    fontFamily:'Montserrat_SemiBold'
  },
  SignUp:{
   
    color:'white',
    fontSize:12,
    fontFamily:'Montserrat_SemiBold'
  },
    container: {
        borderWidth: 0,
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height:'180%',
        width:'87%',
        marginLeft:'7%',
        marginRight:'7%', 
        marginBottom:'5%',
        borderRadius: 35,
        justifyContent:'center',
      },
      input: {
        height: '7%',
        backgroundColor: '#ffffff00',
        borderBottomColor:'#DDDDDD',
        borderBottomWidth:1,
        fontSize: 16,
        fontWeight:'500',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '3%',
        marginTop: '3%',
        fontFamily:'Montserrat_Medium'
      },
      text:{
        color:'#B7B7B7',
        fontSize:14,
        marginTop: 20,
        textAlign:'center',
       fontFamily:'Montserrat'
      },
      terms_conditions:{
        color:'#132641',
        textDecorationLine: 'underline',
        fontSize: 14,
        textAlign: 'center',
        fontFamily:'Montserrat'
      },
      Continuebutton: {
        backgroundColor: '#132641',
        height: '30%',
        width:'87%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 28,
        marginLeft:'7%',
        marginRight:'7%',
        marginTop:'2%',
        marginBottom:'5%'
      },
      continue:{
        color:'#fff',
        fontSize:14,
        fontFamily:'Montserrat_SemiBold'
      }
});
export default SignUp;