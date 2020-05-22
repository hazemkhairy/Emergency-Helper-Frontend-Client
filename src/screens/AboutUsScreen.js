import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MainHeader from '../components/global/MainHeader';
import SubHeaderText from '../components/global/SubHeaderText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/global/HeaderButton'
import AboutUsCard from '../components/global/AboutUsCard';

const AboutUsScreen = ({ props }) => {

    const test = [
    {
        title: "Mission",
        description: "When you have a great story about how your product or service was built to change lives, share it. The “About Us” page is a great place for it to live, too. "
    },
    {
        title: "Vision",
        description: "When you have a great story about how your product or service was built to change lives, share it. The “About Us” page is a great place for it to live, too. "
    }
    ]
    return (
        <View>
            <MainHeader headerText={'About Us'} name={'info-circle'}></MainHeader>
            <SubHeaderText SubHeaderText={'About Us'}></SubHeaderText>
            <FlatList
                data={test}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <AboutUsCard title={item.title}
                    description={item.description}
                    >

                    </AboutUsCard>
                 )}

            /> 


        </View>
    )
}

AboutUsScreen.navigationOptions = (props) => {
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
    title: {
        fontFamily: 'Montserrat_Medium',
        fontSize: 22,
        marginLeft:'6%',
        color:'#132641',
        position:'absolute'
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        marginLeft:'8%',
        marginRight:'8%',
        color:'#132641',
        position:'absolute'

    }

})
export default AboutUsScreen;