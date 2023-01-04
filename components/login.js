import { Button, Input } from 'react-native-elements';
import { View, Text } from 'react-native';

export default props => {
    return (
        <View>
        <Text>Faça login</Text>
        <Input placeholder="Nome de usuário" />
        <Input placeholder="Senha" secureTextEntry />
        <Button title="Entrar" />
      </View>
    )
}



