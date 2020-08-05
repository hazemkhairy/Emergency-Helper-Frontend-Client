import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import AddCard from '../components/cardComponents/supportTicketCard'
import Button from '../components/global/reusableButton'
import AddModal from '../components/cardComponents/AddTicketModal'
import Icon from 'react-native-vector-icons/Entypo';
import MainHeader from '../components/global/MainHeader'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import { getAllTickets } from '../Utils/SupportTickets'

const SupportTicket = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getTickets = async () => {
    setIsFetching(true);
    setTickets([]);

    await getAllTickets().then((result) => {
      setTickets(result);
      setIsFetching(false);
    });
  };


  const addNewTicket = () => {
    setModalVisible(!modalVisible)

  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <View style={styles.container}>
      <AddModal modalVisible={modalVisible} newItem={() => getTickets()}
      close={() => setModalVisible(!modalVisible)}
      />
        <View style={{ marginBottom: '3%' }}>
        <MainHeader headerText='Support' name={'users'} />
      </View>
      <View style={styles.rowContainer}>
      <Text style={styles.supportText}>Tickets</Text>
        <Button
          onPress={() => addNewTicket()}
        >
          <View style={styles.buttonContainer}>
            <Icon name={'plus'} style={styles.iconStyle} />
            <Text style={styles.addButton}>New</Text>
          </View>
        </Button>
      </View>
      {tickets.length ? (
        <FlatList
          data={tickets}
          extraData={tickets}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={isFetching}
          onRefresh={() => getTickets()}
          renderItem={({ item }) => (
            <View >
              <AddCard item={item} />
            </View>
          )}
        />
      ) : (<Text style={styles.emptyList}>No previous support tickets till now</Text>
        )}
    </View >


  );


}
SupportTicket.navigationOptions = (props) => {
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
  },
  iconStyle: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  addButton: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  supportText: {
    fontSize: 24,
    fontFamily: "Montserrat_SemiBold",
    color: '#132641',
    marginTop: '2%',
    marginLeft: '7%'
  },
  emptyList: {
    fontSize: 16,
    fontFamily: "Montserrat_SemiBold",
    color: "#132641",
    alignSelf: 'center',
    marginTop: "5%",
  }
})

export default SupportTicket;

