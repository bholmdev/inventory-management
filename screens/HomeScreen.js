import { View, Text } from "react-native"

const HomeScreen = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View style={{backgroundColor:"#444"}}>
            <Text style={{textAlign:'center', marginTop:40}}>Home</Text>
        </View>
    )
}

export default HomeScreen