import { View, Text } from "react-native";
import { Card } from "react-native-elements";

const HomeOption = () => {
    return (
        <View style={{justifyContent: 'center'}}>
            <Card containerStyle={{padding:30, margin:40}}>
                <Text style={{textAlign: 'center'}}>Homepage functions</Text>
            </Card>
        </View>
    )
}

export default HomeOption;