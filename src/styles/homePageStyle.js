import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    
    Backgroundstyle: {
        flex: 1,
        resizeMode: 'stretch',
        height: '93%',
        backgroundColor: '#241332'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:Dimensions.get('window').height>850?80:50
    },
    toliftup: {
        color: '#FFFFFF',
        fontSize: Dimensions.get('window').height<600?30:32,
        fontFamily:'Montserrat_bold',
        marginBottom: Dimensions.get('window').height<600?'1%':'3%'
    },
    welcome: {
        color: '#FFFFFF',
        fontSize: Dimensions.get('window').height<600?30:32,
        fontWeight: 'bold',
        fontFamily:'Montserrat_bold',
    },
    text: {
        color: '#FFFFFF',
        fontSize: Dimensions.get('window').height<600?10:12,
        fontWeight: '200',
        fontFamily: 'Montserrat_Medium'
    },
    loginTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily:'Montserrat_SemiBold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginButton: {
        backgroundColor: '#7598BA',
        height: '48%',
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: 'center',
    },
    SignUpButton: {
        backgroundColor: '#132641',
        height: '53%',
        borderTopLeftRadius: 120,
         justifyContent: "center",
        alignItems: 'center',
        overflow: 'hidden'

        
    },

    SignUpTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily:'Montserrat_SemiBold',
        marginTop:10
    },
    loginbackground:{
        borderTopLeftRadius: 90, 
        backgroundColor: '#7598BA',
         height: '20%' ,
         overflow: 'hidden'

    },
   

});