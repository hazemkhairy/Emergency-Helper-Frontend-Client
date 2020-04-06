import { StyleSheet,Dimensions } from 'react-native';


export default StyleSheet.create({ 
    texterror: {
        color: '#b30000',
        fontSize: 14,
        position: 'relative',
        alignItems: 'center',
        marginLeft: '7%',
        fontFamily: 'Montserrat_Medium',
        marginTop: '2%'
    },
    error: {
        borderBottomColor: '#b30000',
        borderBottomWidth: 1
    },
    
    white_Background: {
        backgroundColor: '#F1F0F2',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    blueBackground: {
        backgroundColor: '#7598BA',
        height:Dimensions.get('window').height*0.33,
        borderBottomLeftRadius: 70
    },
    container: {
        position: 'absolute',
        marginTop: Dimensions.get('window').height>850?'18%':'10%',
        width: '100%',
        height: '100%'
    },
    backButton: {
        marginLeft: '10%',
        width: 25,
        marginBottom:'2%'
    },
    backIcon: {
        color: '#fff',
        fontSize: 20
    },
    continueButton: {
        backgroundColor: '#132641',
        height:Dimensions.get('window').height>850?'27%':'30%',
        width: '86%',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '7%',
        marginRight: '7%',
    },
    continueText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat_SemiBold'
    },

});