import React,{useState,useEffect} from 'react';
import {  View,StyleSheet,FlatList,Dimensions,TextInput,TouchableOpacity, YellowBox,KeyboardAvoidingView,Platform,SafeAreaView } from 'react-native';
import ChatCard from '../components/cardComponents/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MainHeader from '../components/global/MainHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import {getTicketsMessages,addMessage} from '../Utils/SupportTickets'
const TicketScreen = ({navigation}) => {
  const category =navigation.state.params.props.category
  const ticketID=navigation.state.params.props.id
  
  const [messages, setMessages] = useState([]);
  const [message,setMessage]=useState('');
  const [reloading, setReloading] = useState(false);
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
  // useEffect(() => {
  //   getTicketsMessages(ticketID).then((result) => {
  //     setMessages(result);
  //   });
  // }, []);

  const newMessage = async () => {
      addMessage(ticketID,message).then((result) => {
      //console.log(message)
      setMessage('')
      getMessages()
    });
  }
  
 
  const getMessages = async () => {
    setReloading(true);
    setMessages([]);
    await getTicketsMessages(ticketID).then((result) => {
      setMessages(result);
      setReloading(false);
     
    });
  };
  useEffect(() => {
    getMessages();
  }, []);

  console.log(messages)
  return (
    <View style={styles.container}>
     
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={"always"}
      style={ styles.container }
      showsVerticalScrollIndicator={false}
      behavior="padding"
    >

      <View style={{height:Dimensions.get("window").height *0.80}}>
         <MainHeader headerText={category} style={{height:Dimensions.get('window').height * 0.18}} />
         <FlatList
             refreshing={reloading}
             onRefresh={() => getMessages()}
             data={messages}
             scrollToIndex={messages.length - 1}
             initialScrollIndex={messages.length - 1}
             getItemLayout = {(data, index) => (
              { length: 170, offset: 170 * index, index }
              )}
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
       
      
        </View>
      
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
      width:'100%',
      position: 'absolute'
  },
  chattingConatiner:{
    //height:Dimensions.get("window").height *0.60
  }
})

export default TicketScreen;