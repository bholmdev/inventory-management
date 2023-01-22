import { Alert, Button, Modal, Text, TextInput, View } from 'react-native';
import React from 'react';
import styles from '../config/styles';
import { Card } from 'react-native-elements';
import { useState } from 'react';
import { Formik } from 'formik';

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
              <Formik>
                <Formik
                  initialValues={{ email: '' }}
                  onSubmit={values => console.log(values)}
                >
                  {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                      <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      />
                      <Button onPress={handleSubmit} title="Submit" />
                    </View>
                  )}
                </Formik>
              </Formik>
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