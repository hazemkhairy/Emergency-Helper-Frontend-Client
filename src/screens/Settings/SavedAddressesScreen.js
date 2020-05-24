import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, FlatList } from "react-native";
import NewAddresses from "../../components/Settings/NewAddress";
import MainButton from "../../components/global/MainButton";
import Icon from "react-native-vector-icons/Ionicons";
import AddAddressModal from "../../components/Settings/AddAddressModal";
import { getSavedAddresses } from "../../Utils/Addresses";

const SavedAddresses = ({ navigation }) => {
  const [newAddressModal, setNewAddressModal] = useState(false);
  const [dataset, setDataset] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadSavedAddresses = async () => {
    setIsFetching(true);
    setDataset([]);
    setLoading(true);
    await getSavedAddresses().then((result) => {
      setDataset(result);
      setLoading(false);
      setIsFetching(false);
    });
  };

  const addNewAddress = () => {
    setNewAddressModal(!newAddressModal);
  };
  const reload = () => {
    loadSavedAddresses();
  };

  useEffect(() => {
    loadSavedAddresses();
  }, []);

  return (
    <View style={styles.container}>
      <AddAddressModal modalVisible={newAddressModal} test={() => reload()} />

      <View style={styles.blueBackground}>
        <Text style={styles.hText}>Saved Addresses</Text>
      </View>

      <View style={styles.btnContainer}>
        <Text style={styles.subHeader}>Addresses</Text>
        <MainButton style={styles.addBTN} onPress={() => addNewAddress()}>
          <Icon name="ios-add" size={25} color="#FFF" />
          <Text style={styles.addBTNtxt}> New</Text>
        </MainButton>
      </View>
      {dataset.length ? (
        <FlatList
          data={dataset}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          refreshing={isFetching}
          onRefresh={() => loadSavedAddresses()}
          renderItem={({ item }) => (
            <NewAddresses address={item}></NewAddresses>
          )}
        />
      ) : (
        <Text style={styles.noAddressesContainer}> No saved addresses</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "#7598BA",
    height: Dimensions.get("window").height * 0.3,
    borderBottomLeftRadius: 70,
  },
  hText: {
    fontSize:
      40 *
      Math.min(
        Dimensions.get("window").height / 800.0,
        Dimensions.get("window").width / 375.0
      ),
    color: "white",
    fontFamily: "Montserrat_bold",
    marginTop: "25%",
    alignSelf: "center",
  },
  subHeader: {
    fontSize: 24,
    color: "#132641",
    marginBottom: "4%",
    fontFamily: "Montserrat_SemiBold",
    marginTop: "10%",
  },

  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  addBTN: {
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    marginTop: "18%",
    marginLeft: "8%",
  },
  addBTNtxt: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: "5%",
  },
  noAddressesContainer: {
    textAlign: "center",
    fontSize: 18,
    color: "#132641",
    fontFamily: "Montserrat_SemiBold",
    marginTop: "10%",
  },
});

export default SavedAddresses;
