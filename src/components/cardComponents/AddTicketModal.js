import React, { useState,useEffect } from 'react';
import { Text,View,StyleSheet, TouchableOpacity, TextInput, Dimensions,KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Icondown from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import ReusableButton from '../global/reusableButton'
import {getAllSubjects,NewSupportSupportTicket} from '../../Utils/SupportTickets'
const AddTicketModal = ({ modalVisible,newItem,close }) => {
   
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  const [subjects,setSubjects]=useState('');
  const [description,setDescription]=useState('');
  const [allSubjects, setAllSubjects] = useState([]);
  const [validSubjects, setvalidSubjects] = useState(true);
  const [validDescription,setvalidDescription]=useState(true);
 
  useEffect(
    () => {
      getAllSubjects().then(
            (result) => {
              setAllSubjects(result.map(o => { return { label: o.name, value: o.name } }))
            }
        )
      
    }, []) 
    const validData=()=>
    {
      let valid=true
      if(subjects==''||subjects=='Subject')
      {
        setvalidSubjects(false)
        valid=false
      }
      else { 
        setvalidSubjects(true)
        
      }
      if (!/\S/.test(description)) {
        setvalidDescription(false)
      valid =false
      }
      else 
      { 
      setvalidDescription(true)
      }
      return valid
    }
    const AddElement = async () => {

     if(validData())
     {
     NewSupportSupportTicket(description,subjects).then((result) => {
      newItem()
      close()
    });
    }
  }
  const closeModal=  ()=>{
    close()
    setVisible(false)
   }
    return (
        <Modal style={{ margin: 5 }} isVisible={visible} animationIn="fadeIn" animationInTiming={1000}>
            <KeyboardAvoidingView behavior={'position'}>
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => closeModal()}>
                       <Icon name={'close'} size={25} color={'#454F63'}/>
                    </TouchableOpacity>
                </View>
                    <Text style={styles.creatText}>Create new ticket</Text>
                <View  style={validSubjects?styles.subjectsContainer:[styles.subjectsContainer,styles.errorStyle]}>
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
                onValueChange={(value) => {setSubjects(value)}}
                useNativeAndroidPickerStyle={false}
                items={allSubjects}
                Icon={() => {
                  return (
                    <Icondown name="ios-arrow-down" style={{color:"#132641",fontSize:20}}  />
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
                        style={validDescription?styles.textInput:[styles.textInput,styles.errorStyle]}
                        onChangeText={(text) => {setDescription(text)}}
                    />
                </View>
                
                <ReusableButton style={styles.buttonStyle}
                onPress={()=>AddElement()}>
               <Text style={styles.addButton}>Add</Text>
               </ReusableButton>
      
            </View>
            </KeyboardAvoidingView>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '99%',
        height: Dimensions.get("window").height *0.45,
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
        borderRadius: 12,
        borderColor:'#D5D6D6',
        width:'60%',
        marginBottom: '5%',
        alignSelf: 'center',
        paddingHorizontal:'3%',
        padding:12,
       
    },
    textInputContainer: {
        width: '60%',
        height: '30%',
        marginBottom: '5%',
        alignSelf: 'center',
    },
    textInput: {
        borderRadius: 12,
        borderColor:'#D5D6D6',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding:10,
        paddingTop:15,
        fontFamily: "Montserrat_SemiBold",
        fontSize: 14,
        color:'#78849E'
    },
    errorStyle:{
      borderColor:'#b30000'
    },
    buttonStyle: {
        alignSelf: 'center',
    },
    addButton:{
      color: "white",
      fontSize: 18,
      fontFamily: "Montserrat",
    },
   
})
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
    color:'#78849E'
  },
  inputAndroid: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
    color:'#78849E'
  },
});
export default AddTicketModal;