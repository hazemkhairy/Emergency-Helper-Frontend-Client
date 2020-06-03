import React, { useState,useEffect } from 'react';
import { Text,View,StyleSheet, TouchableOpacity, TextInput, Dimensions,KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import Icondown from "react-native-vector-icons/Ionicons";
import RNPickerSelect from "react-native-picker-select";
import ReusableButton from '../global/reusableButton'
import {getAllSubjects,NewSupportSupportTicket,getAllTickets} from '../../Utils/SupportTickets'
const AddTicketModal = ({ modalVisible,newItem }) => {
   
  if (!modalVisible) return null;
  const [visible, setVisible] = useState(modalVisible);
  const [subjects,setSubjects]=useState('');
  const [description,setDescription]=useState('');
  const [allSubjects, setAllSubjects] = useState([]);
  const [validSubjects, setvalidSubjects] = useState(false);
  const [validDescription,setvalidDescription]=useState(false);
  const [data,setData]=useState([])

  const getTickets = async () => {
    
    setData([]);

    await getAllTickets().then((result) => {
      setData(result);
     
    });
  };
 
  useEffect(
    () => {
      getAllSubjects().then(
            (result) => {
              setAllSubjects(result.map(o => { return { label: o.name, value: o.name } }))
            }
        )
        getTickets();
    }, [])
   
    
    const AddElement = async () => {
    NewSupportSupportTicket(description,subjects).then((result) => {
      newItem()
      setVisible(!modalVisible);
      getTickets()
    });
    
  }
   
    return (
        <Modal style={{ margin: 5 }} isVisible={visible} animationIn="fadeIn" animationInTiming={1000}>
            <KeyboardAvoidingView
                  behavior={'position'}
            >
            <View style={styles.container}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={() => setVisible(!modalVisible)}>
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
                onValueChange={(value) => {
                  setSubjects(value)
                  {
                    if (value!='Subject') {
                      setvalidSubjects(true)

                    } else setvalidSubjects(false)
                  }
                }}
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
                        onChangeText={(text) => {
                          setDescription(text)
                          {
                            if (/\S/.test(text)) {
                              setvalidDescription(true)
        
                            } else setvalidDescription(false)
                          }
                        }}
                    />
                </View>
                {validDescription & validSubjects ?  
                <ReusableButton  style={styles.buttonStyle}
                onPress={()=>AddElement()}>
               <Text style={styles.addButton}>Add</Text>
               </ReusableButton>:<View style={styles.inactivebuttonStyle}> 
               <Text style={styles.addButton}>Add</Text>
               </View>
               }
      
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
    inactivebuttonStyle: {
      borderRadius: 30,
      width: "40%",
      backgroundColor:'#132641',
      alignItems:'center', 
      paddingVertical:10,
      alignSelf: 'center',
    }
})
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
  },
  inputAndroid: {
    fontSize: 14,
    fontFamily: "Montserrat_SemiBold",
  },
});
export default AddTicketModal;