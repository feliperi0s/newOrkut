import { View, Text, Image , Button, TextInput} from 'react-native';
import styles from './styles'

export default props => {
    return (
        <View style={styles.container}>
        <Image
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
        <Button style={styles.button} title="Entrar"/>
      </View>
    )
}





