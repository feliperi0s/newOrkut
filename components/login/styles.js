import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE258F',
        flex:1,
        paddingTop:84
    },
    input: {
        borderWidth:2,
        borderColor:"white",
        borderRadius:10,
        color: 'white',
        paddingVertical:10,
        paddingHorizontal:25,
        width:274,
        margin: 5,
        display:'flex',
        marginHorizontal: '15%'
        
    },    
    button: {
        padding:16,
        backgroundColor:'white',
        alignContent: 'center',
        justifyContent: 'center',
        width:274,
        borderRadius:8,
        marginHorizontal: '15%',
        marginTop:250
    },

    buttonText:{
        color:'#EE258F',
        textAlign:'center',
        fontSize: 20,

    },
    text : {
        color: 'white',
        fontWeight: '400',
        fontSize: 20,
        paddingBottom:40,
        paddingTop:40,
        marginHorizontal: '43%'

    },
    img: {
        marginHorizontal: '35%'
    }

  });

  export default styles;
