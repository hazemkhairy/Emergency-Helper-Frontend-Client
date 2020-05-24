import React, { useState, useEffect } from 'react';
import { Text, View,StyleSheet,FlatList,Dimensions } from 'react-native';
import CardItem from '../components/cardComponents/historyCard'
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
const History = () => {
  const historyData=[
    {
      id: '0',
      date:'19/5/2020 5:00PM',
      helperName:'Name',
      categoryName:'Electonics',
      price:'500 EGP',
      description:'Description Description Description Description Description Description Description'
    },
    {
        id: '1',
        date:'19/6/2020 5:00PM',
        helperName:'Name',
        categoryName:'Electonics',
        price:'500 EGP',
        description:'Description Description Description Description Description Description Description'
    },
    {
        id: '2',
        date:'19/7/2020 5:00PM',
        helperName:'Name',
        categoryName:'Electonics',
        price:'500 EGP',
        description:'Description Description Description Description Description Description Description'
    },
    {
        id: '2',
        date:'19/7/2020 5:00PM',
        helperName:'Name',
        categoryName:'Electonics',
        price:'500 EGP',
        description:'Description Description Description Description Description Description Description'
    }, 
  ];


  return (
    
    <View style={styles.container}>
         
         <MainHeader headerText='History' name='calendar-o'/>
         <View style={{marginLeft:'4%'}}>
           <SubHeaderText SubHeaderText='Your History'/>
           </View>
           <FlatList
             data={historyData}
             keyExtractor={(item,index) => 'key'+index}
             showsVerticalScrollIndicator={false}
             renderItem={({ item, index }) => {
            return (
              <View >
                <CardItem item={item} />
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
  }
})

export default History;