import { Text, View, Button } from 'react-native';
import styles from '../config/styles';

const AddInventoryScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.addInventoryScreenText}>Inventories</Text>
            <Text>Inventory 1</Text>
            <Text>Inventory 2</Text>
            <Text>Inventory 3</Text>
            <Button title='+ Add inventory' />
        </View>
    )
}

export default AddInventoryScreen;