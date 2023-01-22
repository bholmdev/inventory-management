import { Alert, Modal, Text, Pressable, View } from 'react-native';
import React from 'react';
import styles from '../config/styles';
import { Button, Card } from 'react-native-elements';
import { useState } from 'react';

const AccountScreen = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);

  return (
    <>
      <Card containerStyle={{ margin: 0, marginTop: 50 }}>
        <Card.Title style={styles.settingsScreenMainText}>Settings</Card.Title>
        <Card.Divider />
        <Text>Name: </Text>
        <Text style={styles.settingsScreenSubText}>(Please Login to View)</Text>
        <Text>Email</Text>
        <Text style={styles.settingsScreenSubText}>(Please Login to View)</Text>
        <Text>Phone</Text>
        <Text style={styles.settingsScreenSubText}>(Please Login to View)</Text>
        <Text>Company</Text>
        <Text style={styles.settingsScreenSubText}>(Please Login to View)</Text>
      </Card>
      <View style={{ paddingTop: 15, paddingHorizontal: 90 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={createModalVisible}
          onRequestClose={() => {
            Alert.alert('Account Creations screen has been closed.');
            setCreateModalVisible(!createModalVisible);
          }}>
          <View>
            <View>
              <Text>Future Account Creation Screen!</Text>
              <Button
                onPress={() => setCreateModalVisible(!createModalVisible)}
                title="Close Modal"
              />
            </View>
          </View>
        </Modal>
        <Button
          onPress={() => setCreateModalVisible(!createModalVisible)}
          title="Create Account"
        />
      </View>
      <View style={{ paddingTop: 15, paddingHorizontal: 90 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={loginModalVisible}
          onRequestClose={() => {
            Alert.alert('Login Screen has been closed.');
            setLoginModalVisible(!loginModalVisible);
          }}>
          <View>
            <View>
              <Text>Future Login Screen!</Text>
              <Button
                onPress={() => setLoginModalVisible(!loginModalVisible)}
                title="Close Modal"
              />
            </View>
          </View>
        </Modal>
        <Button
          onPress={() => setLoginModalVisible(!loginModalVisible)}
          title="Login"
        />
      </View>
    </>
  );
};

export default AccountScreen