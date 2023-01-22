import { View, Text } from 'react-native';
import React from 'react';
import styles from '../config/styles';
import { Button, Card } from 'react-native-elements';

const AccountScreen = () => {
  return (
    <>
      <Card containerStyle={{ margin: 0, marginTop: 50 }}>
        <Card.Title style={styles.settingsScreenMainText}>Settings</Card.Title>
        <Card.Divider />
        <Text>Name: </Text>
        <Text style={styles.settingsScreenSubText}>(Username)</Text>
        <Text>Email</Text>
        <Text style={styles.settingsScreenSubText}>(user email)</Text>
        <Text>Phone</Text>
        <Text style={styles.settingsScreenSubText}>(user phone)</Text>
        <Text>Company</Text>
        <Text style={styles.settingsScreenSubText}>(user company)</Text>
      </Card>
      <View style={{ paddingTop: 15, paddingHorizontal: 90 }}>
        <Button
          onPress={() => console.log("Create Account")}
          title="Create Account"
          color="blue"
        />
      </View>
      <View style={{ paddingTop: 15, paddingHorizontal: 90 }}>
      <Button
          onPress={() => console.log("Login")}
          title="Login"
          color="green"
        />
      </View>
    </>
  );
};

export default AccountScreen