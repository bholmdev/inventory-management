import { View } from "react-native";
import Main from "./app/screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Main />        
    </NavigationContainer>
  );
}

