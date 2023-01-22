import { View, Text } from "react-native";
import styles from "../config/styles";

const HomeScreen = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View style={styles.screenContainer}>
            <Text style={styles.homeScreenText}>Home</Text>
            <Text>List of inventories rendered below:</Text>
        </View>
    )
}

export default HomeScreen;