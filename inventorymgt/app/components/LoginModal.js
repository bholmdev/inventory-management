import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const LoginModal = () => {
    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Please Login Below</Text>
            <TextInput
                style={styles.input}
                placeholder="User Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
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

export default LoginModal;