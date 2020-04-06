import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
       //start from here
    textError: {
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
    input: {
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '0%',
        marginTop: '5%',
    },

    whiteBackground: {
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
        marginTop:'10%',
        width: '100%',
        height: '100%'
    },
    backButton: {
        marginLeft: '7%',
        width: 25
    },
    backIcon: {
        color: '#fff',
        fontSize: 20
    },
    signInUpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        alignSelf: 'center'


    },
    activeText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    inActiveText: {
        color: '#C0CDDC',
        fontSize: 12,
        fontFamily: 'Montserrat_SemiBold'
    },
    form: {
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
        width: '87%',
        marginLeft: '7%',
        marginRight: '7%',
        marginBottom: '5%',
        marginTop: '5%',
        paddingTop: '7%',
        borderRadius: 35,
        justifyContent: 'center',
        minHeight: '25%',
        alignContent: 'center',

    },
    continueButton: {
        backgroundColor: '#132641',
        height: '25%',
        width: '87%',
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