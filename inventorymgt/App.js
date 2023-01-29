import React from 'react';
import { Text } from 'react-native'
import Main from "./app/screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
