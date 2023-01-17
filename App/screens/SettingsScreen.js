import { View, Text } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 40, backgroundColor:"green", padding: 20 }}>Settings</Text>
      <Text>Name: </Text>
      <Text style={{paddingLeft:10}}>(Username)</Text>
      <Text>Email</Text>
      <Text style={{paddingLeft:10}}>(user email)</Text>
      <Text>Phone</Text>
      <Text style={{paddingLeft:10}}>(user phone)</Text>
      <Text>Company</Text>
      <Text style={{paddingLeft:10}}>(user company)</Text>
    </View>
  )
}

export default SettingsScreen