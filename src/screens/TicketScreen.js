import React, { useState, useEffect } from 'react';
import { View,Text, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import normalize from "react-native-normalize";
import ChatCard from '../components/cardComponents/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { getTicketsMessages, addMessage } from '../Utils/SupportTickets'
import { Header } from 'react-native/Libraries/NewAppScreen';


const TicketScreen = ({ navigation }) => {

  const category = navigation.state.params.props.category
  const ticketID = navigation.state.params.props.id

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [reloading, setReloading] = useState(false);
  const [active, setActive] = useState(false);

  const newMessage = async () => {
    if (active == true) {
      addMessage(ticketID, message).then((result) => {
        setMessage('')
        setActive(false)
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
      <View style={{ height: Dimensions.get('window').height < 600 ? Dimensions.get("window").height * 0.75 : Dimensions.get("window").height * 0.91 }}>
       <View style={styles.headerContainer}>
         <Text style={styles.headerText}> {category} </Text>
       </View>
        <View style={{ flex: 1,marginTop:'2%'  }}>
          <FlatList
            inverted
            keyboardShouldPersistTaps="handled"
            refreshing={reloading}
            onRefresh={() => getMessages()}
            data={messages}
            getItemLayout={(data, index) => ({
              length: 170,
              offset: 170 * index,
              index,
            })}
            keyExtractor={(item, index) => "key" + index}
            showsVerticalScrollIndicator={true}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <ChatCard item={item} />
                </View>
              );
            }}
          />
          <KeyboardSpacer
          />
        </View>
      </View>
      <KeyboardAvoidingView
        style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
        behavior={Platform.OS == "ios"?'position':null}
      >
        <View style={styles.footer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Write your reply…"
                autoCorrect={false}
                placeholderTextColor='#BCC5D3'
                underlineColorAndroid='transparent'
                onChangeText={(text) => {
                  setMessage(text)
                  {
                    if (/\S/.test(text)) {
                      setActive(true)

                    } else setActive(false)
                  }
                }}
                style={styles.input}
                value={message}
                multiline
              />
            </View>
          </TouchableWithoutFeedback>
          {!active ? <Icon name={'arrow-right-circle'} color={'#BCC5D3'} size={30} /> :
            <TouchableOpacity onPress={() => newMessage()}>
              <Icon name={'arrow-right-circle'} color={'#132641'} size={30} />
            </TouchableOpacity>}
        </View>
      </KeyboardAvoidingView>
    </View>

  );


}
TicketScreen.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
          <Item title="back" iconName='arrow-back' onPress={() => { props.navigation.goBack() }} />
        </HeaderButtons>
      )
    },

  }
}
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#7598BA',
    height: Dimensions.get('window').height * 0.20,
    borderBottomLeftRadius: 70,
    alignItems:'center',
},

headerText: {
    color: 'white',
    fontSize: normalize(40) *
        Math.min(
            Dimensions.get("window").height / 900.0,
            Dimensions.get("window").width / 500.0
        ),
    marginTop:Dimensions.get("window").height<850?'15%':'20%',
    fontFamily: 'Montserrat_bold'
},

  container: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
  footer: {
    borderWidth: 1,
    borderTopColor:'#E9EEF1',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    alignItems: 'center',
    height:normalize(60), 
    paddingHorizontal:'5%'
  },
  inputContainer:{
    flex: 1,
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#BCC5D3',
    paddingHorizontal:'5%'
  },
  
})

export default TicketScreen;