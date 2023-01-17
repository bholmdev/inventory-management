import { View, Text } from "react-native";
import HomeScreen from "./HomeScreen";
import AddInventoryScreen from "./AddInventoryScreen";
import SettingsScreen from "./SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// const HomeNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
//         <Stack.Navigator
//             // initialRouteName="HomeScreen"
//         >
//             <Stack.Screen
//                 name='Home'
//                 component={HomeSreen}
//                 options={{ title: 'Home' }}
//             />
//             <Stack.Screen
//                 name='AddInventoryScreen'
//                 component={AddInventoryScreen}
//                 options={{ title: 'Add Inventory' }}
//             />
//         </Stack.Navigator>
//     )
// }

const Main = () => {
    return (
        //view has a bcakground color so that we can see where the different views' borders are. [delete/ change later]
        <View style={{ flex: 1, backgroundColor: "#888" }}>
            <Tab.Navigator
                initialRouteName='Home'
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Tab.Screen
                    name='Add Inventory'
                    component={AddInventoryScreen}
                    options={{ title: 'Add Inventory' }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                    options={{ title: 'Settings' }}
                />
            </Tab.Navigator>
        </View>
    );
}

export default Main;