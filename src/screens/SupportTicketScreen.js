import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import AddCard from '../components/cardComponents/supportTicketCard'
import Button from '../components/global/reusableButton'
import AddModal from '../components/cardComponents/AddTicketModal'
import Icon from 'react-native-vector-icons/Entypo';
import MainHeader from '../components/global/MainHeader'
import SubHeaderText from '../components/global/SubHeaderText'
import { getAllTickets } from '../Utils/SupportTickets'

const SupportTicket = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  const getTickets = async () => {
    setIsFetching(true);
    setTickets([]);
    setLoading(true);
    await getAllTickets().then((result) => {
      setTickets(result);
      setLoading(false);
      setIsFetching(false);
    });
  };
  // const reload = () => {
  //   getTickets();
  // };

  const addNewTicket = () => {
    setModalVisible(!modalVisible)

  };
  const reload = () => {
    getTickets();
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <View style={styles.container}>
      <AddModal modalVisible={modalVisible} newItem={() => getTickets()}
      />
      <MainHeader headerText='Support' name={'users'} />
      <View style={styles.rowContainer}>
        <View style={{ marginBottom: '5%' }}>
          <SubHeaderText SubHeaderText={'Tickets'} />
        </View>
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
      ) : (<Text > </Text>
        )}
    </View >


  );


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
    marginTop: '5%',
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

})

export default SupportTicket;

