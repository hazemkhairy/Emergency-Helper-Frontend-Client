
import React,{useEffect,useState} from 'react';
import {  Text,View,StyleSheet,FlatList,Dimensions } from 'react-native';
import CardItem from '../components/cardComponents/historyCard'
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import {viewHistory} from '../Utils/History'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
const History = () => {

  const [history, setHistory] = useState([]);
  const [reloading, setReloading] = useState(false);

  const getHistory = async () => {
    setReloading(true);
    setHistory([]);
    await viewHistory().then((result) => {
      setHistory(result);
      setReloading(false);
    });
  };
 
  useEffect(() => {
    getHistory();
  }, []);
  
  const historyData=[
    {
      id: '0',
      date:'19/6/2020 5:00PM',
      name:'Helper’s name',
      category:'Electonics',
      price:'500 EGP',
      description:'Description Description Description Description Description Description Description'
    },
    {
        id: '1',
        date:'19/6/2020 5:00PM',
        name:'Helper’s name',
        category:'Electonics',
        price:'500 EGP',
        description:'Description Description Description Description Description Description Description'
    },
    {
        id: '2',
        date:'19/7/2020 5:00PM',
        name:'Helper’s name',
        category:'Electonics',
        price:'500 EGP',
        description:'Visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details visit details.'
    },
    {
        id: '2',
        date:'19/7/2020 5:00PM',
        name:'Helper’s name',
        category:'Electonics',
        price:'500 EGP',
        description:'Description Description Description Description Description Description Description'
    }, 
  ];


  return (
    
    <View style={styles.container}>
         
         <MainHeader headerText='History' name='calendar-o'/>
           <SubHeaderText SubHeaderText='Your History'/>
           {history.length==0?<Text style={styles.nodatText}> No requests history till now </Text>:
           <FlatList
             data={history}
             keyExtractor={(item,index) => 'key'+index}
             showsVerticalScrollIndicator={false}
             refreshing={reloading}
             onRefresh={() => getHistory()}
             renderItem={({ item, index }) => {
            return (
              <View >
                <CardItem item={item} />
              </View>
            )
          }}
         />
        }
     </View >
  );


}
History.navigationOptions = (props) => {
  return {
      title: '',
      headerLeft: () => {
          return (
              <HeaderButtons HeaderButtonComponent={HeaderButton} styles={{}}>
                  <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
              </HeaderButtons>
          )
      },
      headerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          backgroundColor: '#7598BA'

      },
      headertransparent: true,
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF', 
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex:1
  },
  nodatText:{
    fontSize:   16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf:'center',
    marginTop: "5%",
  }
})

export default History;
