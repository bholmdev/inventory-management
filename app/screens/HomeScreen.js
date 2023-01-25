import { View, Text } from "react-native";
import styles from "../config/styles";
import HomeOption from "../components/HomeOption";

const HomeScreen = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View style={styles.screenContainer}>
            <Text style={styles.homeScreenText}>Dashboard</Text>
            <HomeOption title='Homepage functions' />
            <HomeOption 
                title=' Low Inventory Items' 
                icon='battery-half' />
            <HomeOption title='Some Other Option here' />
        </View>
    )
}

export default HomeScreen;