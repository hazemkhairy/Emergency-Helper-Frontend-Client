import React,{useState} from 'react';
import {  View,StyleSheet,FlatList,Dimensions,TextInput,TouchableOpacity } from 'react-native';
import ChatCard from '../components/cardComponents/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MainHeader from '../components/global/MainHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {messages} from '../data/MessageData'
import { set } from 'react-native-reanimated';
const Chatting = () => {
  
  const [message,setMessage]=useState('');
  const [reloading, setReloading] = useState(false);
  const newMessage = () => {
    if(message!='')
    {
    const newItem={
      id: '5',
      name:'Name',
      Message:message,
      inMessage:true,
      date:'25/5'
    }
    messages.push(newItem)
    setMessage('')
  }
   }

  return (
    // <View style={styles.container}>
   <KeyboardAwareScrollView
      keyboardShouldPersistTaps={"always"}
      style={ styles.container }
      showsVerticalScrollIndicator={false}
    >
   
      <View style={{height:Dimensions.get("window").height *0.80}}>
         <MainHeader headerText='Ticket Subject' style={{height:Dimensions.get('window').height * 0.16}} />
         <FlatList
             data={messages}
             keyExtractor={(item,index) => 'key'+index}
             showsVerticalScrollIndicator={true}
             renderItem={({ item, index }) => {
            return (
              <View >
               <ChatCard item={item}/>
              </View>
            )
          }}
         />
        </View>
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Write your reply…"
                placeholderTextColor='#BCC5D3'
                underlineColorAndroid='transparent'
                onChangeText={(text) => setMessage(text)}
                style={styles.input}
                returnKeyType="send"
                value={message}
                />
          </View>
            <TouchableOpacity onPress={()=>newMessage()}>
             <Icon name={'arrow-right-circle'} color={'#132641'} size={30}/>
            </TouchableOpacity>
        </View>
    
        </KeyboardAwareScrollView>
      
  );


}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF', 
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
    flex:1
  },
  line:{
      borderWidth:1,
      borderColor:'#E9EEF1',
  },
  footer:{
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal:10,
    alignItems:'center',
    //bottom:0,
   
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
    height:70
  },
  input:{
      fontFamily:'Montserrat',
      fontSize:16,
      color:'#BCC5D3',
      paddingHorizontal:'10%',
      justifyContent: 'flex-end',
      bottom:0,
      height:70,
      width:'100%'
  },
  chattingConatiner:{
    //height:Dimensions.get("window").height *0.60
  }
})

export default Chatting;