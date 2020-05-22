import React, { useState,useEffect } from 'react';
import { Text,
   View,
    StyleSheet, 
    TouchableOpacity, 
    TextInput, Dimensions,AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import LoadingModal from './LoadingModal'
import Icon from 'react-native-vector-icons/AntDesign';
import Icondown from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import ReusableButton from './reusableButton'
import {ticketsData} from '../../data/TicketsData'
import {AddSupportTicket,getAllSubjects} from '../../Utils/cardData'
const AddTicketModal = ({ modalVisible }) => {
    // const [loading, setLoading] = useState(false);
    if (!modalVisible) return null;
    const [visible, setVisible] = useState(modalVisible);
    const [subjects,setSubjects]=useState('');
    const [description,setDescription]=useState('');

    //Waiting for endpoint
    // const [allSubjects, setAllSubjects] = useState([]);
    // useEffect(
    //   () => {
    //     getAllSubjects().then(
    //           (result) => {
    //             setAllSubjects(result.map(o => { return { label: o.name, value: o.name } }))
    //           }
    //       )
    //   }, [])
    

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var allDate= date + '/' + month + '/' + year + ' ' + hours + ':' + min 
    
    const AddElement = () => {
      const newTicket={
        id: '0',
        date:allDate,
        ticketSubject:subjects,
        description:description
      }
      ticketsData.push(newTicket)
      setVisible(false)

    }
    return (
        <Modal style={{ margin: 5 }} isVisible={visible} animationIn="fadeIn" animationInTiming={1000}>
            {/* <LoadingModal modalVisible={loading}></LoadingModal> */}
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                       <Icon name={'close'} size={25} color={'#454F63'}/>
                    </TouchableOpacity>
                </View>
                    <Text style={styles.creatText}>Create new ticket</Text>
                <View style={styles.subjectsContainer}>
              <RNPickerSelect
                placeholder={
                     { label: "Subject", value: "Subject" }
                }
               
                style={{
                  ...pickerSelectStyles,
                  placeholder: {
                    fontSize: 14,
                    fontFamily: "Montserrat_SemiBold",
                    color: "#78849E",
                  },
                }}
                value={subjects}
                onValueChange={(value) => setSubjects(value)}
                useNativeAndroidPickerStyle={false}
                items={[
                  { label: "Help", value: "Help" },
                  { label: "Call", value: "Call" },
                ]}
                //items={allSubjects}
                Icon={() => {
                  return (
                    <Icondown name="ios-arrow-down" size={20} color="#132641"   />
                  );
                }}
              />
            </View>

                <View style={styles.textInputContainer}>
               
                    <TextInput
                        placeholder="Description"
                        placeholderTextColor='#78849E'
                        multiline
                        value={description}
                        style={styles.textInput}
                        onChangeText={(text) => setDescription(text)}
                        blurOnSubmit={true}
                    />
                  
                </View>
                <View style={styles.buttonContainer}>
               <ReusableButton 
               style={styles.buttonStyle}
               Title={'Create'}
               onPress={AddElement}
               />
               </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '99%',
        height: '45%',
        backgroundColor: '#FFFFFF',
        borderRadius:50,
        alignSelf:'center',
    },
    closeContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight:'11%',
        position: 'absolute', 
    },
    creatText: {
        fontFamily: "Montserrat_SemiBold",
        color:'#132641',
        fontSize: 20,
        justifyContent:'center',
        textAlign:'center',
        marginTop:'8%',
        marginBottom:'3%'
    },
    subjectsContainer:{
        borderWidth:1,
        width:'60%',
        marginBottom: '5%',
        height: '15%',
        alignSelf: 'center',
        padding:12,
        borderRadius: 12,
        borderColor:'#D5D6D6',
    },
    textInputContainer: {
        width: '60%',
        marginBottom: '5%',
        height: '30%',
        alignSelf: 'center',
    },
    textInput: {
        borderRadius: 12,
        width: '100%',
        height: '100%',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        fontFamily: "Montserrat_SemiBold",
        fontSize: 14,
        borderColor:'#D5D6D6'
    },
    buttonStyle: {
        height:'38%',
        alignSelf: 'center',
    },
    
})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      color: "black",
      //fontFamily: "Montserrat_Medium",
    },
    inputAndroid: {
      fontSize: 16,
      color: "black",
     // fontFamily: "Montserrat_Medium",
    },
  });
export default AddTicketModal;