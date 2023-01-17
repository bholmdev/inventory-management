import { View, Text } from "react-native";

const HomeScreen = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View>
            <Text style={{textAlign:'center', marginTop:40, backgroundColor:"#444", padding: 20}}>Home</Text>
            <Text>List of inventories rendered below:</Text>
        </View>
    )
}

export default HomeScreen;