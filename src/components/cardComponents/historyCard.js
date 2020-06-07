import React,{useState} from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const cardItem = ({ item }) => {
   
    const [active,setActive]=useState(false)
  
    var day = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    let a='PM'
    if(hours<11)
    {
        a='AM'
    }
    if( hours > 12 )
    {
      hours = hours - 12;
    }
    if( hours == 0 )
    {
        hours = 12;
    } 
    let date= day+  '/' + month + '/' + year + ' ' + hours + ':' + min +' '+  a
    return (
        <View  style={styles.container}>
            <View style={styles.buttonContainer}>
                <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.helperName}>{item.name}</Text>
                <Text style={styles.categoryName}>{item.category}</Text>
                </View>
                <TouchableOpacity onPress={()=>setActive(!active)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={20}/>
                </TouchableOpacity>
            </View>
                {active==true?<Text style={styles.details}>{item.description}</Text>:null
                }
                <Text  style={styles.price}>{item.price}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        width: '87%',
        alignSelf:'center',
        borderRadius: 40,
        shadowOffset: {
            width: 4,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        backgroundColor: '#FFFFFF',
        marginBottom:'3%',
        marginTop:'3%',
        padding: '2%',
        flex: 1,
    },
    date: {
        fontSize: 13,
        fontFamily: 'Montserrat_bold', 
        color:'#132641'
    },
    helperName:
    {
        fontSize: 12,
        color: '#132641',
        opacity:0.5,
        fontFamily: 'Montserrat',
        marginTop:'2%',
    },
    categoryName:
    {
        fontSize: 13,
        color: '#B1B7C0',
        fontFamily: 'Montserrat',
        marginTop:'2%',
        marginBottom:'10%'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center',
        marginTop:'5%',
    },
    price:{
        fontSize: 12,
        color: '#132641',
        opacity:0.5,
        fontFamily: 'Montserrat',
        marginRight:'10%',
        position: "absolute", 
        bottom: '10%', 
        alignSelf: "flex-end",
    },
    details:{
        fontSize: 13,
        color: '#B1B7C0',
        fontFamily: 'Montserrat',
        marginTop:'2%',
        marginLeft:'7%',
        marginBottom:'7%'
    }
})

export default cardItem