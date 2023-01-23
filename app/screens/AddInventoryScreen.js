import { Text, View, Button, Modal, Alert } from 'react-native';
import { useState } from 'react';
import styles from '../config/styles';
import NewInventoryModal from '../components/NewInventoryModal';

const AddInventoryScreen = () => {
    const [showNewInvModal, setShowNewInvModal] = useState(false)

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.addInventoryScreenText}>Inventories</Text>
            <Text>Inventory 1</Text>
            <Text>Inventory 2</Text>
            <Text>Inventory 3</Text>
            <View style={{ paddingTop: 15, paddingHorizontal: 90 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={showNewInvModal}
                    onRequestClose={() => {
                        Alert.alert('New Inventory cancelled.');
                        setShowNewInvModal(!showNewInvModal);
                    }}>
                    <View>
                        <View>
                            <NewInventoryModal />
                            <Button
                                title="Submit"
                                onPress={() => setShowNewInvModal(!showNewInvModal)}
                            />
                            <Button
                                onPress={() => setShowNewInvModal(!showNewInvModal)}
                                title="Close Modal"
                            />
                        </View>
                    </View>
                </Modal>
                <Button
                    onPress={() => setShowNewInvModal(!showNewInvModal)}
                    title="Create New Inventory"
                />
            </View>
        </View>
    )
}

export default AddInventoryScreen;