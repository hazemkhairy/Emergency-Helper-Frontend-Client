import React from 'react';
import {Text,View,StyleSheet,ImageBackground,TextInput,KeyboardAwareScrollView,Dimensions,Alert} from 'react-native';
import { Button } from 'react-native-elements'; 
import {userActions} from '../store/Register/Registeractions';
import {connect} from 'react-redux';
import {createStore} from 'redux';

import { AntDesign } from '@expo/vector-icons'
const {width,height}=Dimensions.get('window');

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Register extends React.Component
{

    constructor(props) {
        super(props);  
    
         this.state={
           
          firstName: '',
          lastName: '',
          phonenumber: '',
          email:'',
          password: '',
          confirmpassword:''
      }
      this.onChangeText = this.onChangeText.bind(this);
     
     }
     onChangeText = (key, val) => {
        this.setState({ [key]: val })
                    
        }
    // handleChange(event) {
    //     const { name, value } = event.target;
    //     const { user } = this.state;
    //     this.setState({
    //         user: {
    //             ...user,
    //             [name]: value
    //         }
    //     });
    //   }
    validation =(value)=>{
        const error={};
        const { firstName, lastName, phonenumber, email,password,confirmpassword } = this.state
        if(firstName!='')
        {
          error="Firstname Required"
        }
        if(lastName!='')
        {
          error="Lastname Required"
        }
        if(phonenumber!='')
        {
          error="Phone number Required"
        }
        if(email!='')
        {
          error="Email Required"
        }
        if(password!='')
        {
          error="Password Required"
        }
        if(confirmpassword!='')
        {
          error="Confirm Password Required"
        }
        return error;
    }
    Register = async () => {
        const { firstName, lastName, phonenumber, email,password,confirmpassword } = this.state
        console.log(this.state)
        
        if(firstName!=''&&lastName!=''&&phonenumber!=''&&email!=''&&password!=''&&confirmpassword!='')
       {
           console.log('user successfully signed up!: ')
           showMessage({
            message: "Simple message",
            type: "info",
          });
       }
         else  {
        console.log('error signing up', )
        }
        }
      render() {
       
      return(
       
        //<KeyboardAwareScrollView style={{flex:1}}>
        <View style={{backgroundColor:'#F1F0F2',flex: 1}} onSubmit={this.handleSubmit} >
           <View style={{backgroundColor:'#7598BA',height:hp('33%'),borderBottomLeftRadius:70}}>
             <Button type="clear" style={{position:'absolute',marginTop:30,marginLeft:20}} 
             icon={ <AntDesign name="arrowleft"size={20} color="white"/>  } onPress={()=>{this.props.navigation.navigate('Home')}}
             /> 
         <View style={{flexDirection:'row',marginTop:'20%',justifyContent:'center'}}> 
         <Button title='SIGN IN' titleStyle={{color:'#C0CDDC',fontSize:12,marginRight:50}} type='clear'   onPress={()=>{this.props.navigation.navigate('Login')}}
         />
         <Button title='SIGN UP' titleStyle={{color:'white',fontSize:12}} type='clear'/>
         </View>
          <View style={styles.container}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              value={this.state.firstName}
              onChangeText={val => this.onChangeText('firstName', val)}
             
            />
          
            <TextInput
              placeholder="Last Name"
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              onChangeText={val => this.onChangeText('lastName', val)}
              
            />
           
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              keyboardType={"numeric"}

             onChangeText={val => this.onChangeText('phonenumber', val)}
            />
            <TextInput
              placeholder="E-mail"
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              keyboardType={"email-address"}
          
              onChangeText={val => this.onChangeText('email', val)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              onChangeText={val => this.onChangeText('password', val)}
            />
            <TextInput 
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor = '#B9B3BD'
              style={styles.input}
              onChangeText={val => this.onChangeText('confirmpassword', val)}
            />
            <Text style={styles.text}>By clicking continue you are agreeing to our </Text>
           
            <Button title='terms and conditions.' titleStyle={{color:'#132641',textDecorationLine: 'underline',}} type='clear'/>
            </View>
            <Button title='Continue' titleStyle={{color:'white',fontSize:14}} style={styles.button} type='clear' onPress={this.validation}

            />
            </View>
            </View>
            
          //  </KeyboardAwareScrollView>
           
      )
       }
  }
  const styles=StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#fff',
      height:hp('67%'),
      width:width*0.88,
      marginLeft:width*0.064,
      //marginRight:24,
      borderRadius: 35,
      justifyContent:'center',
    },
    input: {
      //marginHorizontal: 10,
     // marginVertical: 5,
      height: hp('5%'),
      backgroundColor: '#ffffff00',
      marginHorizontal: 25,
      marginVertical: 15,
      borderBottomColor:'#DDDDDD',
      borderBottomWidth:1,
      marginBottom:20,
      marginTop:5,
      fontSize: 16,
      fontWeight:'500'
    },
    text:{
      color:'#B9B3BD',
      fontSize:14,
      position:'relative',
      alignItems:'center',
      marginLeft:30,
      marginRight:20
    },
    button: {
      backgroundColor: '#132641',
      height: 50,
      marginHorizontal: 20,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      marginLeft:20,
      marginRight:20,
      marginTop:20
    }
  
  });
  function mapState(state) {
    return { registration:state };
  }
//   const actionCreators = {
//     register: userActions.register
//   }
  export default connect(mapState,null)(Register);
//export default Register;