import { View, Text } from "react-native"
import HomeScreen from "./HomeScreen"

const Main = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View style={{backgroundColor:"#888"}}>
            <Text style={{textAlign:'center', marginTop:70, backgroundColor:"#888"}}>Main</Text>
            <HomeScreen/>
        </View>
    )
}

export default Main