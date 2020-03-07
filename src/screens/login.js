import React from 'react';
import {Text,View,StyleSheet,ImageBackground,TextInput,Image,KeyboardAvoidingView,Card,Dimensions} from 'react-native';

import { Button } from 'react-native-elements'; 
import { AntDesign } from '@expo/vector-icons'
const {width,height}=Dimensions.get('window');

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
console.log(height);

class Login extends React.Component
{
//   constructor(props)
//   {
//     this.state={
//       Username:'',
//       Password:''
//     }
//   }
  render(){
    return(
        <View style={{backgroundColor:'#F1F0F2',flex:1}}>
        <View style={{backgroundColor:'#7598BA',height:hp('33%'),borderBottomLeftRadius:70}}>
           <Button type="clear" style={{position:'absolute',marginTop:30,marginLeft:20}}
           icon={ <AntDesign name="arrowleft"size={20} color="white"/> } onPress={()=>{this.props.navigation.navigate('Home')}}/>
       <View style={{flexDirection:'row',marginTop:'20%',justifyContent:'center'}}>
       <Button title='SIGN IN' titleStyle={{color:'white',fontSize:12,marginRight:50}} type='clear'/>
       <Button title='SIGN UP' titleStyle={{color:'#C0CDDC',fontSize:12}} type='clear' onPress={()=>{this.props.navigation.navigate('Register')}}/>
       </View>
        <View style={styles.container}>
          <TextInput
            placeholder="Email"
            placeholderTextColor = '#B9B3BD'
            autoCorrect={false}
            style={styles.input}
            //onChangeText={(value)=>this.setSate({username:value})}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor = '#B9B3BD'
            autoCorrect={false}
            style={styles.input}
           // onChangeText={(value)=>this.setSate({password:value})}
          />
          </View>
          <Button title='Continue'titleStyle={{color:'white'}} style={styles.Continuebutton} type='clear'/>
          <Button type='clear' style={styles.button2} title='FORGOT PASSWORD' titleStyle={{color:'#132641',fontSize:12,fontWeight:'500'}} type='clear'/>
          </View>
          </View>
    )
  }

}
const styles=StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        height:hp('25%'),
        width:wp('87%'),
        marginLeft:24,
        marginRight:24,
        borderRadius: 35,
        justifyContent:'center',
      },
      input: {
        height: hp('5%'),
        backgroundColor: '#ffffff00',
        marginHorizontal: 25,
        marginVertical: 15,
        borderBottomColor:'#DDDDDD',
        borderBottomWidth:1,
        marginBottom:25,
        marginTop:5,
        fontSize: 16,
        fontWeight:'500'

      },
      text:{
        color:'#DDDDDD',
        fontSize:12,
        position:'relative',
        alignItems:'center'
      },
      Continuebutton: {
        backgroundColor: '#132641',
        height: 52,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 28,
        marginLeft:'5%',
        marginRight:'5%',
        marginTop:20,
        marginBottom:10
      },
});
export default Login;