import React, { useState, useEffect } from 'react';
import { Text, View,StyleSheet,Dimensions, FlatList } from 'react-native';
import AddCard from '../components/cardComponents/supportTicketCard'
import Button from '../components/global/reusableButton'
import AddModal from '../components/global/AddTicketModal'
import Icon from 'react-native-vector-icons/AntDesign';
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import {getAllTickets} from '../Utils/SupportTickets'

const SupportTicket = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tickets, setTickets] = useState([]);

    const refresh = async () => {
    getAllTickets().then(
      (result) => {
        setTickets(result)
      }
  )
   }
   useEffect(
    () => {
      refresh();
    }, [])
    return (
    <View  style={styles.container}>
         <AddModal modalVisible={modalVisible}
         />
        <MainHeader headerText='Support' name={'users'}/>
          <View style={styles.rowContainer}>
          {/* <Text style={{fontSize:24,fontFamily:'Montserrat_SemiBold',color:'#132641'}}>Tickets</Text> */}
          <View style={{marginBottom:'5%'}}>
          <SubHeaderText SubHeaderText={'Tickets'}/>
          </View>
          <Button 
          Title={'New'} 
          onPress={() =>setModalVisible(!modalVisible)}
          style={{height:35}}
          >
             <Icon name={'plus'} style={styles.iconStyle} />
           </Button>
          </View>
          <FlatList
             data={tickets}
             keyExtractor={(item,index) => 'key'+index}
             //ref = {(flatList) => {flatList = flatList}}
             showsVerticalScrollIndicator={false}
             onEndReachedThreshold={1}
             onRefresh={refresh}
             refreshing={false}
             onScroll={refresh}
             renderItem={({ item, index }) => {
            return (
              <View >
                <AddCard item={item} />
              </View>
            )
          }}
         />
     
     
    </View >


  );


}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF', 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex:1
  },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center',
        marginTop:'5%',
       
    },
    iconStyle:{
        fontSize:20,
        color:'#FFFFFF',
        
    }
})

export default SupportTicket;

