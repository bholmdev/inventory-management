import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const NewInventoryModal = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>New Inventory</Text>
            <TextInput
                style={styles.input}
                placeholder="Inventory Name"
            />
            <TextInput
                style={styles.input}
                placeholder="description"
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