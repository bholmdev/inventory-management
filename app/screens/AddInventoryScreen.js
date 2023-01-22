import { Text, View } from 'react-native';
import styles from '../config/styles';

const AddInventoryScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.addInventoryScreenText}>New Inventory</Text>
            <Text>+ inventory</Text>
        </View>
    )
}

export default AddInventoryScreen;