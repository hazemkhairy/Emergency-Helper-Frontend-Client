import React,{useState} from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'
// import Left from '../../../assets/images/svg/left.svg'
const ChatCard = ({ item }) => {
    let containerStyle = styles.container
    let itemStyle = item.inMessage ? styles.itemOut : styles.itemIn;
    let rowStyle =item.inMessage ? [styles.rowContainer,styles.rowRight]:[styles.rowContainer,styles.rowLeft]
   
   
       if(item.inMessage)
       return(
           <View>
                <View style={rowStyle}>
        <View style={[containerStyle, itemStyle]}>
        <View style={[styles.balloon]}>
        <Text style={styles.rightmessageStyle} >{item.Message}</Text>
      </View>
    </View>
    {/* <Left height={30} width={30}/> */}
    <Icon name={'triangle-right'} style={styles.rightIcon} /> 
    </View>
    <Text style={styles.dateText}>{item.date}</Text>
    </View>
   )
    return(
        <View>
             <Text style={styles.nameStyle}>{item.name}</Text>
     <View style={rowStyle}> 
      <Icon name={'triangle-left'} style={styles.leftIcon} /> 
     <View style={[containerStyle, itemStyle]}>
     <View style={[styles.balloon]}>
       <Text style={styles.leftmessageStyle}>{item.Message}</Text>
       </View>
     </View>
     </View>
     <Text style={styles.dateText}>{item.date}</Text>
     </View>  
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        maxWidth:'95%'
    },
    itemIn: {
        borderWidth:1,
        borderColor:'#E2E8ED',
      },
      itemOut: {
        backgroundColor:'#132641',
        
      },
      balloon: {
        padding: 15,
        borderRadius: 20,
       
        height: 'auto',
         width: 'auto', 
      },
      rowContainer: {
        flexDirection: 'row',
      },
      rowLeft:{
        alignSelf: 'flex-start',
        
      },
      rowRight:{
        alignSelf: 'flex-end',
        marginRight:'2%'
      },
      nameStyle:{
          marginLeft:'4%',
          fontFamily: "Montserrat_SemiBold",
          fontSize: 14,
          color:'#132641'
      },
      leftmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#132641'
      },
      rightmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#FFFFFF',
      },
      dateText:{
        fontSize: 12,
        color: '#BCC5D3',
        fontFamily: 'Montserrat',
        marginRight:'6%',
        marginBottom:'5%',
        alignSelf: "flex-end",
      },
      leftIcon:
      {
        color:'#E2E8ED',
        fontSize:30,
        marginRight:-1,
        marginTop:'2%'
      },
      rightIcon:{
        color:'#132641',
        fontSize:30,
        marginRight:-1,
        marginTop:'2%'
      }
})

export default ChatCard

