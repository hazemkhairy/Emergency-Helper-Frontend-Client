import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const ChatCard = ({ item }) => {
    let containerStyle = styles.container
    let itemStyle = item.senderRole=='Client' ? styles.itemOut : styles.itemIn;
    let rowStyle =item.senderRole=='Client' ? styles.rowRight:styles.rowLeft
   
    var day = new Date(item.date).getDate();
    var monthNames = [ 'Jan', 'Feb', 'March', 'Apr', 'May','June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month =  monthNames[new Date(item.date).getMonth()];
    var hours = new Date(item.date).getHours(); 
    var min = new Date(item.date).getMinutes(); 
    var date= day +' '+ month + ' '+ hours + ':'+ min
    
      if(item.senderRole=='Client'){
       return(
           <View>
                <View style={rowStyle}>
        <View style={[containerStyle, itemStyle]}>
        <View style={[styles.balloon]}>
        <Text style={styles.rightmessageStyle} >{item.message}</Text>
      </View>
    </View>
    <Icon name={'triangle-right'} style={styles.rightIcon} /> 
    </View>
    <Text style={styles.rightdateText}>{date}</Text>
    </View>
   )
       }
    return(
        <View> 
             <Text style={styles.nameStyle}> {item.senderName} ({item.senderRole})</Text>
     <View style={rowStyle}> 
      <Icon name={'triangle-left'} style={styles.leftIcon} /> 
     <View style={[containerStyle, itemStyle]}>
     <View style={[styles.balloon]}>
       <Text style={styles.leftmessageStyle}>{item.message}</Text>
       </View>
     </View>
     </View>
     <Text style={styles.leftdateText}>{date}</Text>
     </View>  
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        maxWidth:'92%',
        width:'auto',
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
        width:'auto'
      },
     
      rowLeft:{
        alignSelf: 'flex-start',
        flexDirection: 'row',
      },
      rowRight:{
        alignSelf: 'flex-end',
        marginRight:'2%',
        flexDirection: 'row'
      },
      nameStyle:{
          marginLeft:'4%',
          fontFamily: "Montserrat_SemiBold",
          fontSize: 14,
          color:'#132641',
          opacity:0.6
      },
      leftmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#4C5264'
      },
      rightmessageStyle:{
        fontFamily: "Montserrat",
        fontSize: 14,
        color:'#FFFFFF',
      },
      rightdateText:{
        fontSize: 12,
        color: '#BCC5D3',
        fontFamily: 'Montserrat',
        marginRight:'6%',
        marginBottom:'3%',
        alignSelf: "flex-end",
      },
      leftdateText:{
        fontSize: 12,
        color: '#BCC5D3',
        fontFamily: 'Montserrat',
        marginLeft:'5%',
        marginBottom:'3%',
        alignSelf: "flex-start",
      },
      leftIcon:
      {
        color:'#E2E8ED',
        fontSize:30,
        marginRight:-1,
        marginTop:'1%'
      },
      rightIcon:{
        color:'#132641',
        fontSize:30,
        marginLeft:-1,
        marginTop:'1%'
      }
})

export default ChatCard

