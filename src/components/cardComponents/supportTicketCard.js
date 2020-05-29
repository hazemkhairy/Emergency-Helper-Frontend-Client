import React,{useState,useEffect} from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-navigation-hooks'

const supportCard = ({ item }) => {
    let containerStyle = styles.container
    let inlarge =styles.inlarge
    const [active,setActive]=useState(false)
    var day = new Date(item.date).getDate();

    var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month =  monthNames[new Date(item.date).getMonth()];
    var date= day +' '+ month
    
    if(active)
    {
        containerStyle={...containerStyle,...inlarge}
    }
    const { navigate } = useNavigation();
   
    return (
        <View style={containerStyle}>
            
            <View style={styles.buttonContainer}>
                <View>
                <TouchableOpacity onPress={() =>navigate('TicketScreen',{props:{id:item._id,category:item.category}})} >
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
        //height:60,
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
    inlarge:{
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
        marginRight:'3%',
        marginBottom:'5%'
    },
    
})

export default supportCard