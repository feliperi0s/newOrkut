import { TouchableOpacity, Text} from 'react-native';
import styles from './styles'


export default props =>{
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}
