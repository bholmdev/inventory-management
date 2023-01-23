
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const CreateAccountModal = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Create Your Account Below</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="User Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-Enter Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Supervisors Email"
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

export default CreateAccountModal;