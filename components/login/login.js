import { Button, Input } from 'react-native-elements';
import { View, Text } from 'react-native';
import styles from './styles'
import { SafeAreaView } from 'react-native';

export default props => {
    return (
        <View style={styles.container}>
        <Text>Faça login</Text>
        <Input style={styles.input}  placeholder="Nome de usuário" />
        <Input style={styles.input} placeholder="Senha" secureTextEntry />
        <Button style={styles.button} title="Entrar" />
      </View>
    )
}





