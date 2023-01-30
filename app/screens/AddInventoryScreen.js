import React from "react";
import { Text, View, Button, FlatList, Modal, SafeAreaView, TextInput, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import styles from '../config/styles';

const AddInventoryScreen = () => {
    const [inventoryName, setInventoryName] = useState('');
    const [description, setDescription] = useState('');
    const [showNewInvModal, setShowNewInvModal] = useState(false);

    return (
        <View style={styles.screenContainer}>
            <Card containerStyle={{ margin: 0, marginTop: 50 }}>
                <Card.Title style={styles.settingsScreenMainText}>Inventories</Card.Title>
                <Card.Divider />
                <Text>{inventoryName}</Text>
                <Text style={styles.settingsScreenSubText}>{description}</Text>
                <Text>Inventory 2</Text>
                <Text style={styles.settingsScreenSubText}>Description goes here</Text>
                <Text>Inventory 3</Text>
                <Text style={styles.settingsScreenSubText}>Description goes here</Text>
            </Card>
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
                        <SafeAreaView>
                            <Text style={{ alignSelf: "center" }}>New Inventory</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Inventory Name"
                                onChangeText={setInventoryName}
                                value={inventoryName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Description"
                                onChangeText={setDescription}
                                value={description}
                            />
                            <View style={styles.buttons}>
                                <Button
                                    title="Submit"
                                    onPress={() => {
                                        console.log("Submitted Name: " + inventoryName)
                                        setShowNewInvModal(!showNewInvModal)
                                    }}
                                />
                            </View>
                            <View style={styles.buttons}>
                                <Button
                                    title="Close Screen"
                                    onPress={() => setShowNewInvModal(!showNewInvModal)}
                                />
                            </View>
                        </SafeAreaView>
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