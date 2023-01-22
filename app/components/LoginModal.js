import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";

const LoginScreen = () => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(0);

    return (
        <SafeAreaView>
            <Text style={{ alignSelf: "center" }}>Please Login Below</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="User Name"
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                keyboardType="numeric"
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

export default LoginScreen;