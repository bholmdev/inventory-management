import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";

const NewInventoryModal = () => {
    const [inventoryName, setInventoryName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>New Inventory</Text>
            <TextInput
                style={styles.input}
                placeholder="Inventory Name"
                onChangeText={inventoryName => setInventoryName(inventoryName)}
                value={inventoryName}
            />
            <TextInput
                style={styles.input}
                placeholder="description"
                onChangeTest={description => setDescription(description)}
                value={description}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

export default NewInventoryModal;