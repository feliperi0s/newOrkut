import { View, Text, Image , Button, TextInput} from 'react-native';
import styles from './styles'
import Buttons from './buttons';


export default props => {
    return (
        <View style={styles.container}>
        <Image style={styles.img}
        source={require('../../images/Logo.png')}
        />
        <Text style={styles.text}>Login</Text>
        <TextInput style={styles.input} 
        placeholder="Usuário" 
        placeholderTextColor="white"
        />
        <TextInput style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true}
        placeholderTextColor="white"
         />
        <Buttons title="Entrar"></Buttons>
      </View>
    )
}




