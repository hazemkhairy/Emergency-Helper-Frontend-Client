import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { logOut } from '../Utils/Client';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import CancelModal from '../components/global/CancelModal'
import LoadingModal from '../components/global/LoadingModal'

const MainScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View>
      <CancelModal
        modalVisible={modalVisible}
      />

      <MainHeader headerText={"Main Screen"} >
      </MainHeader>

      <SubHeaderText SubHeaderText={'Main Screen'}></SubHeaderText>

      <Text>Main Screen</Text>
      <Button title="LOG OUT" onPress={() => { logOut(), navigation.navigate('PreConfigScreen') }}></Button>

      <Button title="Available Helpers" onPress={() => navigation.navigate('AvailableHelpersScreen')}>Available Helpers</Button>

      <Button title="Cancel Request" onPress={() => setModalVisible(true)}></Button>
    </View>
  )
}


MainScreen.navigationOptions = (props) => {
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
export default MainScreen;