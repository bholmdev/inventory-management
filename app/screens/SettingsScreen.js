import { View, Text } from 'react-native'
import React from 'react'
import styles from '../config/styles'

const SettingsScreen = () => {
  return (
    <View>
      <Text style={styles.settingsScreenMainText}>Settings</Text>
      <Text>Name: </Text>
      <Text style={styles.settingsScreenSubText}>(Username)</Text>
      <Text>Email</Text>
      <Text style={styles.settingsScreenSubText}>(user email)</Text>
      <Text>Phone</Text>
      <Text style={styles.settingsScreenSubText}>(user phone)</Text>
      <Text>Company</Text>
      <Text style={styles.settingsScreenSubText}>(user company)</Text>
    </View>
  )
}

export default SettingsScreen