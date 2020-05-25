import React,{useState} from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const cardItem = ({ item }) => {
    let containerStyle = styles.container
    let inlarge =styles.inlarge
    const [active,setActive]=useState(false)
    if(active)
    {
        containerStyle={...containerStyle,...inlarge}
    }
    return (
        <View  style={containerStyle}>
            <View style={styles.buttonContainer}>
                <View>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.helperName}>{item.helperName}</Text>
                <Text style={styles.categoryName}>{item.categoryName}</Text>
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
        height:100,
        alignSelf:'center',
        borderRadius: 40,
      //shadowColor: "rgba(31, 84, 195, 0.149)",
        shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: '#FFFFFF',
        marginBottom:'2%',
        marginTop:'2%'
    },
    inlarge:{
        height:180, 
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
        fontFamily: 'Montserrat',
        marginTop:'2%',
    },
    categoryName:
    {
        fontSize: 13,
        color: '#B1B7C0',
        fontFamily: 'Montserrat',
        marginTop:'2%',
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
        fontFamily: 'Montserrat',
        marginRight:'8%',
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
        marginRight:'3%'
    }
})

export default cardItem