
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';
import CardItem from '../components/cardComponents/historyCard'
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { viewHistory } from '../Utils/History'
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

  return (

    <View style={styles.container}>

      <MainHeader headerText='History' name='calendar-o' />
      <SubHeaderText SubHeaderText='Your History' />
      {history.length == 0 ? <Text style={styles.nodatText}> No requests history till now </Text> :
        <FlatList
          data={history}
          keyExtractor={(item, index) => 'key' + index}
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
    headerTransparent: true,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}   >
          <Item title="menu" iconName='menu' onPress={() => { props.navigation.toggleDrawer() }} />
        </HeaderButtons>
      )
    },

  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1
  },
  nodatText: {
    fontSize: 16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf: 'center',
    marginTop: "5%",
  }
})

export default History;
