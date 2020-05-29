import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const ChatCard = ({ item }) => {
    let containerStyle = styles.container
    let itemStyle = item.senderRole=='Client' ? styles.itemOut : styles.itemIn;
    let rowStyle =item.senderRole=='Client' ? styles.rowRight:styles.rowLeft
    var day = new Date(item.date).getDate();

    var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    <Text style={styles.dateText}>{date}</Text>
    </View>
   )
       }
    return(
        <View>
          <View style={{flexDirection:'row',marginTop:'1%'}}>
             <Text style={styles.nameStyle}>{item.senderName}</Text>
             <Text style={styles.nameStyle}>({item.senderRole})</Text>
             </View>
     <View style={rowStyle}> 
      <Icon name={'triangle-left'} style={styles.leftIcon} /> 
     <View style={[containerStyle, itemStyle]}>
     <View style={[styles.balloon]}>
       <Text style={styles.leftmessageStyle}>{item.message}</Text>
       </View>
     </View>
     </View>
     <Text style={styles.dateText}>{date}</Text>
     </View>  
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        minWidth:'20%',
        maxWidth:'92%',
        width:'auto',
        marginTop:'2%'
    },
    itemIn: {
        borderWidth:1,
        borderColor:'#132641',
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
        marginBottom:'3%',
        alignSelf: "flex-end",
      },
      leftIcon:
      {
        color:'#132641',
        fontSize:30,
        marginRight:-1,
        marginTop:'4%'
      },
      rightIcon:{
        color:'#132641',
        fontSize:30,
        //marginRight:-1,
        marginTop:'4%'
      }
})

export default ChatCard

