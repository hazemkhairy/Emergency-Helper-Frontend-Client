import React,{useState} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks'

const supportCard = ({ item }) => {
   
    const [active,setActive]=useState(false)

    var day = new Date(item.date).getDate();
    var monthNames = [ 'January', 'February', 'March', 'April', 'May','June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    var month =  monthNames[new Date(item.date).getMonth()];
    var date= day +' '+ month
    
    const { navigate } = useNavigation();
    const CreateTicket=()=>
    {
        navigate('TicketScreen',{props:{id:item._id,category:item.category}})
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <View>
                <TouchableOpacity onPress={() =>CreateTicket()} >
                <Text  style={styles.ticketSubject}>{item.category}</Text>
                <Text style={styles.date}>{date}</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>setActive(!active)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={20}/>
                </TouchableOpacity>
            </View>
                {active==true?<Text style={styles.details}>{item.description}</Text>:null
                }
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
        fontSize: 12,
        fontFamily: 'Montserrat', 
        color:'#132641',
        marginBottom:'2%'
    },
    ticketSubject:
    {
        fontSize: 13,
        fontFamily: 'Montserrat_bold', 
        color:'#132641',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center',
        marginTop:'3%',
    },
    details:{
        fontSize: 13,
        color: '#B1B7C0',
        fontFamily: 'Montserrat',
        marginTop:'2%',
        marginLeft:'7%',
        marginBottom:'5%'
    },
    
})

export default supportCard