import React,{useState,useEffect} from 'react';
import {  View,StyleSheet,FlatList,Dimensions,TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import ChatCard from '../components/cardComponents/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MainHeader from '../components/global/MainHeader'

import {getTicketsMessages,addMessage} from '../Utils/SupportTickets'

const TicketScreen = ({navigation}) => {

  const category =navigation.state.params.props.category
  const ticketID=navigation.state.params.props.id
  const description=navigation.state.params.props.description
  const date=navigation.state.params.props.date
 
  const obj=
    {
      _id:"1",
      date:date,
      message:description,
      senderRole:"Client"
    }
  const pages=1
  
  const [messages, setMessages] = useState([]);
  const [message,setMessage]=useState('');
  const [reloading, setReloading] = useState(false);
  const [active, setActive] = useState(false);
  messages[0]=(obj)
 
  const newMessage = async () => {
   if(active==true){
      addMessage(ticketID,message).then((result) => {
      setMessage('')
      getMessages()
    });
  }
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

 
  return (
    <View style={styles.container}>
      <View style={{height:Dimensions.get("window").height *0.81}}>
       <MainHeader headerText={category} style={{height:Dimensions.get('window').height * 0.18, marginBottom:'4%'}} />
   
      
      
      
         <FlatList
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }}
             refreshing={reloading}
             onRefresh={() => getMessages()}
             data={messages}
             extraScrollHeight={100}
             onEndReached={()=>pages+1}
             onEndReachedThreshold={0.5}
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
               <ChatCard item={item} />
              </View>
            )
          }}
         />
        </View>
       
        <KeyboardAvoidingView
        behavior={'position'}
        style={styles.container}
        keyboardVerticalOffset={60}
        >
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Write your reply…"
                autoCorrect={false}
                blurOnSubmit={true}
                placeholderTextColor='#BCC5D3'
                underlineColorAndroid='transparent'
                onChangeText={(text) => {setMessage(text)
                  {
                    if(/\S/.test(text))
                  {
                    setActive(true)
                   
                  } else setActive(false)
                 }
                  }}
                style={styles.input}
                //returnKeyType="send"
                value={message}
               
                />
          </View> 
          {!active?<Icon name={'arrow-right-circle'}  color={'#BCC5D3'} size={30}/>:  
            <TouchableOpacity onPress={()=>newMessage()}>
            <Icon name={'arrow-right-circle'}  color={'#132641'} size={30}/> 
            </TouchableOpacity> }
        </View>
    
       
        </KeyboardAvoidingView>
     
        </View>
      
  );


}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF', 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex:1,
   
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
    height:60
  },
  input:{
    fontFamily:'Montserrat',
    fontSize:16,
    color:'#BCC5D3',
    paddingHorizontal:'10%',
    justifyContent: 'flex-end',
    bottom:0,
    height:60,
    width:'100%',
    position: 'absolute'
  },
 
})

export default TicketScreen;