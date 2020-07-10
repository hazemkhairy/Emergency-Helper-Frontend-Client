import React,{useState} from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import RatingComponent from '../Request/RatingComponent'
import RatingModal from '../Request/RatingModal'

const cardItem = ({ item }) => {
   
    const [active,setActive]=useState(false)
    const [rateModal, setRateModal] = useState(false);
    const [rate,setRate]=useState(0)

    const fullname = item.acceptedState.helperName;
    const helperName = fullname.split(' ').slice(0, 2).join(' ')
    
    var day = new Date(item.date).getDate(); 
    var month = new Date(item.date).getMonth() + 1; 
    var year = new Date(item.date).getFullYear(); 
    var hours = new Date(item.date).getHours(); 
    var min = new Date(item.date).getMinutes(); 
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
    let totalprice=item.finishedState.totalPrice
    let canceled=false
    let reateButton=false
    if(item.canceledState.isCanceled){
          totalprice='0.0'
          canceled=true
        }
       
            if(item.finishedState.isFinished){
            if(item.finishedState.clientRate.rate!=0)
            {
                let ratee=item.finishedState.clientRate.rate
                console.log(item.finishedState.clientRate.rate)
                setRate(ratee)
            }
            else reateButton=true
            }
      
    
    return (
        
        <View  style={styles.container}>
              <RatingModal modalVisible={rateModal} requestID={item._id} close={()=>setRateModal(false)}/>
            <View style={styles.buttonContainer}>
                <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.helperName}>{helperName}</Text>
                <Text style={styles.categoryName}>{item.category}</Text>
                </View>
                <TouchableOpacity onPress={()=>setActive(!active)}>
                    <Icon name={'angle-down'} color={'#78849E'} size={20}/>
                </TouchableOpacity>
            </View>
                {active==true?<Text style={styles.details}>{item.description}</Text>:null
                }
                <Text  style={styles.price}>{totalprice} EGP</Text>
              
                {canceled ?<Text  style={styles.canceledText}>Canceled</Text>:
               reateButton? <TouchableOpacity onPress={()=>setRateModal(!rateModal)}>
               <Text style={styles.rateStyle}>Rate</Text>
               </TouchableOpacity>: 
               <RatingComponent  maxRating={5}
                   setValue={setRate}
                   value={rate}
                   svgStyle={styles.svgStyle} 
                   starsStyle={styles.containerStyle}
                   />
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
        fontSize: 13,
        fontFamily: 'Montserrat_bold', 
        color:'#132641'
    },
    helperName:
    {
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity:0.5,
      
    },
    categoryName:
    {
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: '#B1B7C0',
        marginBottom:'6%'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'85%',
        alignSelf: 'center',
        marginTop:'5%',
    },
    details:{
        fontSize: 13,
        fontFamily: 'Montserrat',
        color: '#B1B7C0',
        marginLeft:'7.5%',
        marginBottom:'4%'
    },
    price:{
        fontSize: 12,
        fontFamily: 'Montserrat',
        color: '#132641',
        opacity:0.6,
        right:'8%',
        bottom: '20%', 
        alignSelf: "flex-end",
    },
    canceledText:{
        fontSize: 12,
        color: '#132641',
        opacity:0.5,
        fontFamily: 'Montserrat',
        right:'11%',
        position: "absolute", 
        bottom: '7%', 
        alignSelf: "flex-end",
    },
    svgStyle:{
        height:15,
        width:15
    },
    containerStyle:{
        display: 'flex',
        flexDirection: 'row',
        right:'11%',
        position: "absolute", 
        bottom: '9%', 
        alignSelf: "flex-end",
    },
    rateStyle:
    {
        fontSize: 12,
        color: '#132641',
        fontFamily: 'Montserrat',
        right:'11%',
        position: "absolute", 
        bottom: '7%', 
        alignSelf: "flex-end",
    }
   
})

export default cardItem