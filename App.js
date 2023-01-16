import { View } from "react-native"
import Main from './screens/MainComponent.js'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Main />        
    </NavigationContainer>
  );
}

