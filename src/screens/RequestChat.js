import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import normalize from "react-native-normalize";
import ChatCard from '../components/cardComponents/chatCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { allMessages, sendMessage } from '../Utils/CleintChat'
import HelperModal from '../components/Request/HelperModal';
import { MaterialIcons } from '@expo/vector-icons';

//import { Header } from 'react-native/Libraries/NewAppScreen';


const ClientChat = ({ navigation }) => {

  const profilePicture = navigation.state.params.props.HelperPicture
  const name = navigation.state.params.props.name
  const number = navigation.state.params.props.number
  const pricefrom = navigation.state.params.props.pricefrom
  const Priceto = navigation.state.params.props.Priceto
  const category = navigation.state.params.props.category
  const skills = navigation.state.params.props.skills
  const offer = navigation.state.params.props.offer

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [reloading, setReloading] = useState(false);
  const [active, setActive] = useState(false);
  const [Helper, setHelper] = useState(false);

  const openHelperModal = () => {
    setHelper(true);

  };
  const closeHelperModal = () => {
    setHelper(false);
  };

  const newMessage = async () => {
    if (active == true) {
     
      sendMessage(message).then((result) => {
      setMessage('')
      setActive(false)
      getMessages()
       console.log(message)
      });
     // setInterval(getMessages, 5000);
    }
  }

  const getMessages = async () => {
    //setReloading(true);
    
    await allMessages().then((result) => {
      setMessages(result);
     // setReloading(false);
      setInterval(getMessages, 5000);
    });
  };

  useEffect(() => {
    getMessages();

  }, []);

  return (
    <View style={styles.container}>
      <HelperModal
        modalVisible={Helper}
        close={() => closeHelperModal()}
        HelperPicture={profilePicture}
        HelperName={name}
        HelperPriceFrom={pricefrom}
        HelperPriceto={Priceto}
        HelperSkills={skills}
        HelperOffer={offer}
        HelperNumber={number}
        HelperCategory={category}
      />
      <View style={{ height: Dimensions.get('window').height < 600 ? Dimensions.get("window").height * 0.75 : Dimensions.get("window").height * 0.90 }}>
        <View style={styles.headerContainer}>
          <View style={styles.BackButton}>
            <TouchableOpacity onPress={() => { navigation.navigate('AvailableHelpersScreen', openHelperModal()) }}>
              <MaterialIcons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: profilePicture,
              }}
            />
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            inverted
            keyboardShouldPersistTaps="handled"
            style={{ flex: 1 }}
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
                  <ChatCard item={item}
                    chat={'Yes'}
                  />
                </View>
              );
            }}
          />
          <KeyboardSpacer
          />
        </View>
      </View>
      <KeyboardAvoidingView
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
        behavior={Platform.OS == "ios" ? 'position' : null}
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
ClientChat.navigationOptions = (props) => {
  return {
    title: '',
    headerTransparent: true,
    headerShown: false

  }
}
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#7598BA',
    height: Dimensions.get('window').height * 0.20,
    borderBottomLeftRadius: 70,
    alignItems: 'center',
  },
  BackButton: {
    marginRight: '90%',
    marginTop: '7%'
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(400 / 2),
    resizeMode: "cover",
  },
  imageContainer: {
    flexDirection: "row",
    paddingVertical: normalize(5)
  },
  nameText: {
    fontFamily: 'Montserrat_bold',
    fontSize: 20,
    color: '#FFFFFF',
    paddingVertical: normalize(15),
    paddingHorizontal: normalize(10)
  },
  headerText: {
    color: 'white',
    fontSize: normalize(40) *
      Math.min(
        Dimensions.get("window").height / 900.0,
        Dimensions.get("window").width / 500.0
      ),
    paddingTop: '15%',
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
    borderTopColor: '#E9EEF1',
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: normalize(60),
    paddingHorizontal: '5%'
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#BCC5D3',
    paddingHorizontal: '5%'
  },
})

export default ClientChat;