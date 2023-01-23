import { Alert, Button, Modal, Text, View } from 'react-native';
import React from 'react';
import styles from '../config/styles';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import CreateAccountModal from "../components/CreateAccountModal"

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
      <View style={styles.accountButtons}>
        <Button
          onPress={() => setCreateModalVisible(!createModalVisible)}
          title="Create Account"
        />
      </View>
      <View style={styles.accountButtons}>

        <Button
          onPress={() => setLoginModalVisible(!loginModalVisible)}
          title="Login"
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={createModalVisible}
        onRequestClose={() => {
          Alert.alert('Account Creations screen has been closed.');
          setCreateModalVisible(!createModalVisible);
        }}>
        <CreateAccountModal />
        <View style={styles.accountButtons}>
          <Button
            onPress={() => console.log("Create Account Clicked")}
            title="Create Account"
          />
        </View>
        <View style={styles.accountButtons}>
          <Button
            onPress={() => setCreateModalVisible(!createModalVisible)}
            title="Close Screen"
          />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={loginModalVisible}
        onRequestClose={() => {
          Alert.alert('Login Screen has been closed.');
          setLoginModalVisible(!loginModalVisible);
        }}>
        <LoginModal />
        <View style={styles.accountButtons}>
          <Button
            onPress={() => console.log("Login Clicked")}
            title="Login"
          />
        </View>
        <View style={styles.accountButtons}>
          <Button
            onPress={() => setLoginModalVisible(!loginModalVisible)}
            title="Close Screen"
          />
        </View>
      </Modal>
    </>
  );
};

export default AccountScreen