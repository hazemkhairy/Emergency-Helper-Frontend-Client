import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    
    Backgroundstyle: {
        flex: 1,
        resizeMode: 'stretch',
        height: '87%',
        backgroundColor: '#241332'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    toliftup: {
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily:'Montserrat_bold',
        marginBottom: '3%',
    },
    welcome: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily:'Montserrat_bold',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12,
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
        height: '100%',
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: 'center',
    },
    SignUpButton: {
        backgroundColor: '#132641',
        height: '100%',
        borderTopLeftRadius: 120,
        //justifyContent: "center",
        alignItems: 'center',
    },
    SignUpTextStyle: {
        color: 'white',
        fontSize: 14,
        fontFamily:'Montserrat_SemiBold',
        marginTop:30
    },
    loginbackground:{
        borderTopLeftRadius: 100, 
        backgroundColor: '#7598BA',
         height: '10%' 

    },
    signupbackground:{
      backgroundColor: '#7598BA',
       height: '12%'
    }
});