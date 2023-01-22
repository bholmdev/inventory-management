import { View } from "react-native";
import HomeScreen from "./HomeScreen";
import AddInventoryScreen from "./AddInventoryScreen";
import AccountScreen from "./AccountScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

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
                options={{
                    showIcon: true
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{ 
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Inventories'
                    component={AddInventoryScreen}
                    options={{ 
                        title: 'INVENTORIES',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='add-outline'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Account'
                    component={AccountScreen}
                    options={{ 
                        title: 'Account',
                        tabBarIcon: ({ color }) => (
                            <Icon
                                name='person-outline'
                                type='ionicon'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

export default Main;